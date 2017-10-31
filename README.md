# send file url to remote IDM By NodeJs
Send file URL to remote Internet Download Manager (IDM) by NodeJs in windows

## Installation
First clone or downlod the source
Then run these commands inside the project root path

```sh
npm install
npm start

```
(the default port is 2005 , you can change it inside server.js file - watch the firewall of the server which should accepts the port 2005)
After starting server , you can access it from another machine in the network through
IP:PORT in the browser, which IP is the IP of the running server and defualt port is 2005, or run it locally by http://localhost:2005

>Note: you can change the path of IDM installation inside server.js file .
>The default is "C:\\Program Files (x86)\\Internet Download Manager\\IDMan.exe"

- You can send file to the main queue 
- You can send file with instant download option to downlod the file immediately 
- You can start the queue remotely

