import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const newSocket = io("http://192.168.11.59:4000");
    newSocket.on("connect", () => {
      console.log("Connected to server");
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    socket.emit("privateMessage", { recipientID: recipient, message });
    setMessage("");
  };

  useEffect(() => {
    if (socket) {
      socket.on("privateMessage", ({ senderID, message }) => {
        setReceivedMessages((prevMessages) => [
          ...prevMessages,
          { senderID, message },
        ]);
      });
    }
  }, [socket]);

  return (
    <View>
      <TextInput
        placeholder="Recipient's User ID"
        value={recipient}
        onChangeText={(text) => setRecipient(text)}
      />
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Send" onPress={handleSendMessage} />
      <View>
        {receivedMessages.map((msg, index) => (
          <Text key={index}>{`${msg.senderID}: ${msg.message}`}</Text>
        ))}
      </View>
    </View>
  );
};

export default Chat;
