import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-centerv shadow-md p-2">
      <img
        className="h-[2rem]"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt=""
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
