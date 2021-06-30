import React, { useState } from "react";
import s from "./ChatScreen.module.scss";
import ChatMessage from "../ChatMessage/ChatMessage";
import { useData } from "../Context/Context";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";
import firebase from "firebase";
import Loader from "../Loader/Loader";

const ChatScreen = () => {
  const { firestore } = useData();
  const [inputs, setInputs] = useState({});
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  const [isValid, setIsValid] = useState(false);

  const id = localStorage.getItem("id");

  const handleInputs = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const sendMessageToDB = () => {
    firestore.collection("messages").add({
      _id: id,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      name: inputs.name || "Анонимно",
      ...inputs,
    });
  };

  const resetInputs = () => {
    setInputs({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendMessageToDB();
    resetInputs();
    e.currentTarget.reset();
  };

  const checkIsFormValid = (e) => {
    const form = e.currentTarget;
    const validation = form.checkValidity();
    setIsValid(validation);
  };

  return (
    <div className={s.chatScreen}>
      <h1 className={s.title}>Напишите всё, что душе угодно</h1>
      <div className={s.field}>
        {loading ? (
          <Loader />
        ) : messages.length === 0 ? (
          <p className={s.empty}>Сообщений пока нет...</p>
        ) : (
          messages.map((message, i) => (
            <ChatMessage
              data={message}
              index={i}
              key={i}
              className={id !== message._id ? "chatMessage" : "chatUserMessage"}
            />
          ))
        )}
      </div>
      <div className={s.inputs}>
        <form
          onSubmit={handleSubmit}
          className={s.form}
          onChange={checkIsFormValid}
        >
          <input
            className={`${s.input} ${s.name}`}
            placeholder="Ваше имя"
            name="name"
            value={inputs.name}
            onChange={handleInputs}
          />
          <input
            className={`${s.input} ${s.message}`}
            placeholder="Введите сообщение (макс. 140 символов)"
            name="message"
            value={inputs.message}
            onChange={handleInputs}
            minLength={1}
            maxLength={140}
            required
          />
          <button
            type="submit"
            disabled={!isValid}
            className={
              isValid ? s.button : `${s.button} ${s["button_disabled"]}`
            }
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
