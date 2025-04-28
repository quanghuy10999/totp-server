@echo off
echo Starting TOTP Server and ngrok...
cd C:\Users\ADMIN\totp-server
start cmd /k node server.js
start cmd /k ngrok http --url=improved-quagga-currently.ngrok-free.app 3000
echo Done! Check the new terminals for server and ngrok status.
pause