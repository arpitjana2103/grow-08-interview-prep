function throttle(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        }, delay);
    };
}

function sendChatMessage(message) {
    console.log("Sending Message", message);
}

const throttledSendChatMessage = throttle(sendChatMessage, 1000);

throttledSendChatMessage("H");
throttledSendChatMessage("He");
throttledSendChatMessage("Hl");
throttledSendChatMessage("Hll");
throttledSendChatMessage("Hllo");
throttledSendChatMessage("Hllo ");
