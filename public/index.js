const socket = io();
socket.on('connect', () => {
  console.log('Connected!');
})

socket.on('disconnect', () => {
  console.log('disconnected!');
})

socket.on('newEmail', email => {
  console.log('new Email', email);
})

socket.emit('createEmail', { email: 'Yahooo!' })
socket.on('newMessage', newMessage => console.log(newMessage));
socket.emit('createMessage', { message: 'Hello world man' });