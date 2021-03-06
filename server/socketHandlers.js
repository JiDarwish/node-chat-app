export default io => {
  io.on('connect', socket => {
    console.log('Someone connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    })

    socket.emit('newEmail', { email: 'Hi' });

    socket.on('createEmail', newEmail => {
      console.log(newEmail);
    })

    socket.on('createMessage', createdMessage => {
      io.emit('newMessage', createdMessage);
    })

  });
}