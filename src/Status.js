import Paho from "paho-mqtt";

export const getMessengerClient = () => {
  const client = new Paho.Client(process.env.REACT_APP_MESSENGER_URI, "cl123");
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  const options = {
    userName: "rakesh",
    password: "Pass1234",
    keepAliveInterval: 1,
    onSuccess: onConnect,
    onFailure: doFail,
  };
  client.connect(options);

  function onConnect() {
    client.subscribe("test-frontend");
    const message = new Paho.Message(
      JSON.stringify({
        message: "Hello messenger",
        name: "rakesh",
        sentAt: new Date(),
      })
    );
    message.destinationName = "test-frontend";
    client.send(message);
  }

  function doFail(e) {
    console.log("error", e);
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
    }
  }

  function onMessageArrived(message) {}

  return client;
};

export const subscribe = (client, topic) => {
  client.subscribe(topic);
};

export const unsubscribe = (client, topic) => {
  client.unsubscribe(topic);
};
