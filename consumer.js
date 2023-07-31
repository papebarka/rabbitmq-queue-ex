const amqp = require("amqplib");

connect();

async function connect(){
    try  {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel(); // Differente channel from the publisher channel
        const result = await channel.assertQueue("jobs"); //make sure the channel exists or creates it
        
        // We have to keep the channel alive in contrast to the publisher channel.

        channel.consume("jobs", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Received job with input ${input.number}`);

            if (input.number == 18 || input.number == 10){
                channel.ack(message); //acknowledge receipt of the message and dequeue it
            }
        });
        //channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        //console.log(`Job sent successfully ${msg.number}`);
        console.log("Waiting for message");

    }
    catch (ex){
        console.error(ex)
    }
}