import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  function getMsgTime(date){
    let time =  new Date(date*1000).toLocaleTimeString();
    return time
  }
  const ref = useRef();
  // console.log(message.date.seconds);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>{message.text} <br/><span className="timeStamp">{getMsgTime(message.date.seconds)}</span></p>
        
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
