import classes from "./StartingPage.module.scss";
import LeftContent from "./StartingPage/LeftContent/LeftContent"; // ./ in acelasi folder
import RightContent from "./StartingPage/RightContent/RightContent";
import userIcon from "../assets/user.png";
import Newsfeed from "./StartingPage/Newsfeed/Newsfeed";
import { useState } from "react";
import usePost from "../hooks/use-post";

const POST_DATA = [
  {
    id: 0,
    username: "Sergiu 1",
    postDate: "20/07/2022",
    numberOfLikes: 45,
    numberOfShares: 12,
    profileImg: "../assets/nature.jpg",
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
    username: "Sergiu 2",
    postDate: "14/01/1922",
    numberOfLikes: 78,
    numberOfShares: 4,
    profileImg: "../assets/nature.jpg",
    text: "This is my second dynamic post",
    comments: [
      {
        username: "Savin",
        date: "11/06/2027",
        comment: "This is my second dynamic content",
      },
    ],
  },
];

const StartingPage = () => {
  // const [postData, setPostData] = useState(POST_DATA);
  const [postData, setDeletePost] = usePost(10000);

  const deletePost = (id) => {
    setDeletePost(id);
  };

  return (
    <div className={classes.mainContainer}>
      <LeftContent></LeftContent>
      <div className={classes.newsfeed}>
        {postData.length > 0 &&
          postData.map((post) => {
            return (
              <Newsfeed postData={post} removePost={deletePost} key={post.id} />
            );
          })}
        {postData.length === 0 && <p>You have no post to display</p>}
      </div>
      <RightContent />
    </div>
  );
};

export default StartingPage;
