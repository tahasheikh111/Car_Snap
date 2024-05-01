"""
ASGI config for car_damage_detection_web project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
import api.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'car_damage_detection_web.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': URLRouter(api.routing.websocket_urlpatterns),
})