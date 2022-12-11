const { TelegramClient } = require('telegram')
const { StringSession } = require('telegram/sessions')
const input = require('input') // npm i input

const apiId = 0
const apiHash = ''
const stringSession = new StringSession(''); // fill this later with the value from session.save()

(async () => {
    const client = new TelegramClient(new StringSession(stringSession), apiId, apiHash, {})
    await client.connect();
    const msgs = await client.getMessages("me", {
        limit: 10,
    });
    console.log("the total number of msgs are", msgs.total);
    console.log("what we got is ", msgs.length);
    for (const msg of msgs) {
        //console.log("msg is",msg); // this line is very verbose but helpful for debugging
        console.log("msg text is : ", msg.text);
    }
})();