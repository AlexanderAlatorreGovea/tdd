import React, { useState } from "react";

import MessageList from "./components/MessageList";
import NewMessageForm from "./components/NewMessageForm";

const App = () => {
  const [messages, setMessages] = useState([]);
  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  );
};

export default App;
