import { Controller } from "@hotwired/stimulus"

import postsChannel from "channels/posts_channel";


export default class extends Controller {
  static targets = ["message"];

  send(event) {
    event.preventDefault();
    postsChannel.send({ message: this.messageTarget.value });
    this.messageTarget.value = "";
  }
}