# RabbitMQ: BAsic examples of pub and sub

RabbitMQ has too many abstractions, meaning it brings  some kind of complexity into systems. That implies it won't scale well and it would difficult to accomplish some of the deep customizations.

### Messaging model

RabbitMQ uses the AMQP protocol (Advanced Message Queuing Protocol).

RabbitMQ messaging model is based on queue, implementing FIFO.

There is only one publisher. A message can only be consumed once. It is dequeued whenever a consumer acknowledges receipt.