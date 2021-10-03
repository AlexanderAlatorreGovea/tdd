import React, { useState } from "react";

const NewMessageForm = ({ onSend }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event) => {
    const {
      target: { value },
    } = event;
    setInputText(value);
  };

  const handleSend = () => {
    onSend(inputText);
    setInputText("");
  };

  return (
    <div>
      <input
        type="text"
        data-testid="messageText"
        value={inputText}
        onChange={handleTextChange}
      />
      <button onClick={handleSend} data-testid="sendButton">
        Send
      </button>
    </div>
  );
};

export default NewMessageForm;
