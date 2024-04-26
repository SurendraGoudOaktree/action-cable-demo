class PostsChannel < ApplicationCable::Channel
  def subscribed
    stream_for "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    #to do create message 
    PostsChannel.broadcast_to("room_channel", data)
  end
end
