const amqp = require("amqplib");

const msg = {number: process.argv[2]};

connect();

async function connect(){
    try  {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs"); //make sure the channel exists or creates it
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log(`Job sent successfully ${msg.number}`);

    }
    catch (ex){
        console.error(ex)
    }
}