import React, { useState, useEffect } from 'react';
import Footer from "./Footer.jsx";
import BlackNav from "./BlackNav.jsx";
import { w3cwebsocket as W3CWebSocket } from "websocket"; // Import w3cwebsocket
import '../styles/chatforum.css'; // Import CSS file
import imagepath from "../images/_49e4c801-00d4-4429-a534-46d5ed9e0d5f.jpeg";

const SnapTalksPage = ({ senderAddress }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [client, setClient] = useState(null);

    useEffect(() => {
        const roomName = 'snap-talks'; // Replace 'snap_talks' with your desired room name
        const client = new W3CWebSocket('ws://127.0.0.1:8000/ws/' + roomName + '/');

        client.onopen = () => {
            console.log('WebSocket connected');
        };

        client.onmessage = (message) => {
            const data = JSON.parse(message.data);
            setMessages(prevMessages => [...prevMessages, data]);
        };

        setClient(client);

        return () => {
            if (client) {
                client.close();
            }
        };
    }, []);

    const handleMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (client && newMessage.trim() !== '') {
            client.send(JSON.stringify({ text: newMessage, sender: senderAddress }));
            setNewMessage('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSendMessage();
        }
    };

    return (
        <div className="snap-talks-page" style={{ backgroundImage: `url(${imagepath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <header>
                <h1>SNAP-TALKS</h1>
            </header>
            <div>
                <BlackNav />
            </div>
            <div className="message-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-item ${msg.sender === senderAddress ? 'sent' : 'received'}`}>
                        <div className="user-name">{msg.sender}</div>
                        <div className="message-text">{msg.text}</div>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input type="text" value={newMessage} onChange={handleMessageChange} onKeyDown={handleKeyDown} placeholder="Type your message..." />
                <button onClick={handleSendMessage}>Send</button>
            </div>
            <Footer />
        </div>
    );
};

export default SnapTalksPage;
