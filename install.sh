pkg install nodejs -y && pkg install ffmpeg -y && pkg install imagemagick -y && npm install && npm install audit fix

echo "Server Starting...."
node index.js
