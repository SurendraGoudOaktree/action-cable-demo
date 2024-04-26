import consumer from "channels/consumer"

export default  consumer.subscriptions.create("PostsChannel", {
  connected() {
    console.log("connected")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    //console.log(data)
    const rootElement = document.querySelector("#messages")
    var element = document.createElement('p')
    element.innerText = data.message
    rootElement.append(element);
    // Called when there's incoming data on the websocket for this channel
  }

 
});



