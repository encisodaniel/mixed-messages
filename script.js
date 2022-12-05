const messages = {
    first: ['it is', 'right on ', 'nice it is' ,'i am sure it is'],
    second: ['time', 'the exact moment', 'the perfect day', 'a nice day' ],
    third: ['to drink water', 'to get a jog', 'to eat a fruit', 'to walk around', '' ]
}
const messageGenerator = () => {
    let message = [];
    let randomGenerator = Math.floor(Math.random() * messages.first.length);
    message.push(messages.first[randomGenerator]);
    message.push(messages.second[randomGenerator]);
    message.push(messages.third[randomGenerator]);
    return message.join(' ');
}

console.log(messageGenerator());
