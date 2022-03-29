import classes from "./StartingPage.module.scss";
import LeftContent from "./StartingPage/LeftContent/LeftContent"; // ./ in acelasi folder
import userIcon from "../assets/user.png"; // ../ un folder superior
import Newsfeed from "./StartingPage/Newsfeed/Newsfeed";
import { useState } from "react";

const POST_DATA = [
  {
    id: 0,
    username: "Sergiu",
    postDate: "20/07/2022",
    numberOfLikes: 45,
    numberOfShares: 12,
    profileImg: "../assests/firephoto.jpeg",
    text: "This is my new dynamic post",
    comments: [
      {
        username: "Savin",
        date: "21/01/2021",
        comment: "This is my first dynamic content",
      },
      {
        username: "Sergiu",
        date: "22/01/2021",
        comment: "This is my second dynamic content",
      },
    ],
  },
  {
    id: 1,
    username: "Sergiu",
    postDate: "20/07/2022",
    numberOfLikes: 45,
    numberOfShares: 12,
    profileImg: "../assests/firephoto.jpeg",
    text: "This is my new dynamic post",
    comments: [
      {
        username: "Savin",
        date: "21/01/2021",
        comment: "This is my first dynamic content",
      },
    ],
  },
];

const StartingPage = () => {
  const [postData, setPostData] = useState(POST_DATA);

  return (
    <div className={classes.mainContainer}>
      <LeftContent></LeftContent>
      <div className={classes.newsfeed}>
        {postData.map((post) => {
          return <Newsfeed postData={post} key={post.id} />;
        })}
      </div>
      <aside></aside>
    </div>
  );
};

export default StartingPage;
