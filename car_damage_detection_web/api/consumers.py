# Importing required modules
import json  # Allows us to work with JSON data
from asgiref.sync import async_to_sync  # Converts synchronous code to asynchronous
from channels.generic.websocket import WebsocketConsumer  # Provides WebSocket handling capabilities

# Defining the WebSocket consumer class
class TextRoomConsumer(WebsocketConsumer):
    # Method triggered when a client connects
    def connect(self):
        # Extracting the room name from the URL route
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        # Creating a group name based on the room name
        self.room_group_name = 'chat_%s' % self.room_name
        # Joining the room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,  # Group name
            self.channel_name  # Channel name (identifier for this WebSocket)
        )
        # Accepting the WebSocket connection
        self.accept()

    # Method triggered when a client disconnects
    def disconnect(self, close_code):
        # Leaving the room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,  # Group name
            self.channel_name  # Channel name
        )

    # Method triggered when the WebSocket receives a message
    def receive(self, text_data):
        # Parsing received JSON data
        text_data_json = json.loads(text_data)
        # Extracting message and sender from the JSON data
        text = text_data_json['text']
        sender = text_data_json['sender']
        # Sending the message to the room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,  # Group name
            {
                'type': 'chat_message',  # Type of event
                'message': text,  # Message content
                'sender': sender  # Sender of the message
            }
        )

    # Method triggered when a message is sent to the room group
    def chat_message(self, event):
        # Extracting message and sender from the event
        text = event['message']
        sender = event['sender']
        # Sending the message to the WebSocket
        self.send(text_data=json.dumps({
            'text': text,  # Message content
            'sender': sender  # Sender of the message
        }))
