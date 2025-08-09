document.querySelector('.message-input button').addEventListener('click', () => {
    const input = document.querySelector('.message-input input');
    const text = input.value.trim();
    if (text !== "") {
        const msgContainer = document.createElement('div');
        msgContainer.classList.add('message');
        msgContainer.innerHTML = `<span class="user">You</span><p>${text}</p>`;
        document.querySelector('.messages').appendChild(msgContainer);
        input.value = "";
        document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight;
    }
});
