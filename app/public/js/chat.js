var sock = io();
var userName = document.querySelector('#chat-username');
var message = document.querySelector('#chat-message');

sock.on('connect', function(){
  var chatForm = document.forms.chatForm;

  if(chatForm){
    
    
    chatForm.addEventListener('submit', function(e){
      e.preventDefault();
      sock.emit('postMessage', {
        username : userName.value,
        message : message.value
      });
      message.value = '';
      message.focus();
    });
    sock.on('updateMessages', function(data){
      showMessages(data);
    });
  }

});


function showMessages(data){
  var chatDisplay = document.querySelector('.chat-display');
  var newElement = document.createElement('p');
  
  if(userName.value == data.username){
    newElement.className = 'bg-success chat-text';
  }
  else{
    newElement.className = 'bg-warning chat-text';
  }
  
  
  newElement.innerHTML = '<strong>' + data.username +'</strong> :' + data.message;
  chatDisplay.insertBefore(newElement, chatDisplay.firstChild);
}