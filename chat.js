const chatButton = document.querySelector('chat-button');
const chatContent = document.querySelector('msger');
const icons = {
    isClicked: 'Clicked',
    isNotClicked: 'Not Clicked" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);