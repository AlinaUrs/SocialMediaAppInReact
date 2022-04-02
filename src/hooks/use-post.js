import { useEffect, useState } from "react";

const POST_DATA = [
  {
    id: 0,
    username: "Ioana",
    postDate: "20/07/2021",
    numberOfLikes: 45,
    numberOfShares: 1,
    profileImg: "../assets/nature.jpg",
    text: "This is from my last vacation in Asia",
    comments: [
      {
        username: "Alina",
        date: "21/07/2021",
        comment: "Wow!! So cool! ❤",
      },
      {
        username: "Diana",
        date: "22/07/2021",
        comment: "Nice view!! I'd like to go too 😍",
      },
    ],
  },
  {
    id: 1,
    username: "Teresa",
    postDate: "17/08/2021",
    numberOfLikes: 178,
    numberOfShares: 4,
    profileImg: "../assets/nature.jpg",
    text: "Last month in Sevile",
    comments: [
      {
        username: "Jules",
        date: "17/08/2021",
        comment: "You gotta love Spain",
      },
    ],
  },
];

const usePost = (interval) => {
  const [post, setPost] = useState({
    postData: POST_DATA,
    changed: 0,
  });

  useEffect(() => {
    const postInterval = setInterval(() => {
      setPost((prevState) => {
        if (prevState.postData.length > 3) {
          clearInterval(postInterval);
        }
        let newPost;
        if (prevState.postData.length > 0) {
          newPost = {
            ...POST_DATA[prevState.postData.length % 2],
            id: prevState.postData.length * Math.random() * 100,
          };
        } else {
          newPost = {
            ...POST_DATA[prevState.postData[0]],
            id: prevState.postData.length * Math.random() * 100,
          };
        }

        return {
          ...prevState,
          postData: [newPost, ...prevState.postData],
        };
      });
    }, interval);
  }, [post.changed]);

  const deletePost = (id) => {
    setPost((prevState) => {
      const removableElementIndex = prevState.postData.findIndex((post) => {
        return post.id === id;
      });

      prevState.postData.splice(removableElementIndex, 1);

      return {
        ...prevState,
        postData: prevState.postData,
        changed: prevState.changed + 1,
      };
    });
  };

  return [post.postData, deletePost];
};

export default usePost;
