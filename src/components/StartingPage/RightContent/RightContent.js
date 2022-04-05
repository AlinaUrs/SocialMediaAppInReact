import classes from "./RightContent.module.scss";
import { Link } from "react-router-dom";
import firstUser from "../../../assets/users/first.jpg";
import secondUser from "../../../assets/users/second.jpg";
import thirdUser from "../../../assets/users/third.jpg";
import forthUser from "../../../assets/users/forth.png";
import fifthUser from "../../../assets/users/fifth.jpg";
import sixthUser from "../../../assets/users/sixth.jpg";
import seventhUser from "../../../assets/users/seventh.jpg";
import eightUser from "../../../assets/users/eight.jpg";
import ninthUser from "../../../assets/users/ninth.webp";
import tenthUser from "../../../assets/users/tenth.jpg";
import ChatBox from "./Chat";
import { useState } from "react";

const contactListChat = [
  {
    title: "Alfred Cochran",
    imgSrc: firstUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Jayce Hubbard",
    imgSrc: secondUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Dayanara Dominguez",
    imgSrc: thirdUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Eli Kaise",
    imgSrc: forthUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Geovanni Jeffreson",
    imgSrc: fifthUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Kallie Bailey",
    imgSrc: sixthUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Kaydence Crosby",
    imgSrc: seventhUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Lena Parks",
    imgSrc: eightUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Elijah Clark",
    imgSrc: ninthUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
  {
    title: "Cohen Levy",
    imgSrc: tenthUser,
    url: "/chat",
    imgClassName: classes.userPic,
  },
];

const RightContent = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen((prevState) => {
      debugger;
      return !prevState;
    });
  };

  return (
    <aside className={classes.rightContentSide}>
      <div className={classes.contacts}>
        <h3 className={classes.contactsTitle}>Contacts chat</h3>

        <ul className={classes.listUlRight}>
          {contactListChat.map((item, index) => {
            return (
              <li key={index} className={classes.listLiRight}>
                <div className={classes.link} onClick={toggleChat}>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className={item.imgClassName}
                  />
                  <span>{item.title}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${classes.chatBoxDiv} ${chatOpen && "hidden"}`}>
        <ChatBox></ChatBox>
      </div>
    </aside>
  );
};

export default RightContent;
