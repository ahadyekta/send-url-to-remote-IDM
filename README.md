# send file url to remote IDM By NodeJs
Send file URL to remote Internet Download Manager (IDM) by NodeJs

## Installation
First clone or downlod the source
Then run these commands inside the project root path

```
npm install
npm start

```
(the default port is 2005 , you can change it inside server.js file - watch the firewall of the server which should accepts the port 2005)
After starting server , you can access it from another machine in the network through
IP:PORT in the browser, which IP is the IP of the running server and defualt port is 2005, or run it locally by http://localhost:2005

- You can send file to the main queue 
- You can send file with instant download option to downlod the file immediately 
- You can start the queue remotely

