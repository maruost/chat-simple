import React from "react";
import s from "./ChatMessage.module.scss";

const ChatMessage = ({ data, index, className }) => {
  const { message, createdAt, name } = data;
  const timestamp = createdAt?.toDate().toString();
  const time = timestamp?.match(/[0-9]{0,2}:[0-9]{2}/);
  const style = className;
  return (
    <div
      className={`${s.message} ${s[`message_${style}`]}`}
      style={{ order: -index }}
    >
      <p className={`${s.name} ${s[`name_${style}`]}`}>{name}</p>
      <div className={`${s.text} ${s[`text_${style}`]}`}>{message} </div>
      <p className={`${s.timestamp} ${s[`timestamp_${style}`]}`}>{time}</p>
    </div>
  );
};

export default ChatMessage;

