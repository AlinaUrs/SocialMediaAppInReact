import classes from "./Chat.module.css";

const chatInfo = [
  {
    memberName: "Alfred Cochran",
    message: "Hi Alina!",
    messageTwo: "Hi Alfred",
  },
];

const ChatBox = (props) => {
  return (
    <div className={classes.chatBox}>
      {chatInfo.map((index, item) => {
        return (
          <div key={index}>
            <h1 key={item.memberName}></h1>
            <p key={item.message}></p>
            <p key={item.messageTwo}></p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBox;
