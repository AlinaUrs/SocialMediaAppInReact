import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./LeftContent.module.scss";
import userPic from "../../../assets/profile.jpg";
import friendsPic from "../../../assets/friends.png";
import memoriesPic from "../../../assets/memories.png";
import groupsPic from "../../../assets/groups.png";
import marketplacePic from "../../../assets/marketplace.png";
import watchPic from "../../../assets/watch.png";
import { FaCircle } from "react-icons/fa";
import groupOne from "../../../assets/itjobs.png";
import favoriteGroup from "../../../assets/techno.png";
import chiriePic from "../../../assets/chiriecluj.jpg";
import itClujJobs from "../../../assets/itclujjobs.jpg";
import shareClosePic from "../../../assets/shareyour.jpg";

const mainSection = [
  {
    title: "Alina Florina Urs",
    imgSrc: userPic,
    url: "/profile",
    imgClassName: classes.userPic,
  },
  {
    title: "Friends",
    imgSrc: friendsPic,
    url: "/friends",
  },
  {
    title: "Memories",
    imgSrc: memoriesPic,
    url: "/memories",
  },
  {
    title: "Groups",
    imgSrc: groupsPic,
    url: "/groups",
  },
  {
    title: "Marketplace",
    imgSrc: marketplacePic,
    url: "/marketplace",
  },
  {
    title: "Watch",
    imgSrc: watchPic,
    url: "/watch",
  },
];

const secondSection = [
  {
    title: "Junior IT Jobs Romania",
    imgSrc: groupOne,
    url: "/groupJ",
    imgClassName: classes.groupIcon,
  },
  {
    title: "Techno Insiders London Night",
    imgSrc: favoriteGroup,
    url: "/technogroup",
  },
  {
    title: "Chirie Cluj-Napoca",
    imgSrc: chiriePic,
    url: "/chirie",
    imgClassName: classes.groupIcon,
  },
  {
    title: "IT Cluj Jobs Group",
    imgSrc: itClujJobs,
    url: "/groups",
    imgClassName: classes.groupIcon,
  },
  {
    title: "Share your closet pic",
    imgSrc: shareClosePic,
    url: "/shareyourcloset",
    imgClassName: classes.groupIcon,
  },
];

const MINIMISED_ITEMS_COUNT = 4;

const MINIMISED_ITEMS_COUNT_SECOND = 3;

const LeftContent = () => {
  const [numberOfElementsToShow, setNumberOfElementsToShow] = useState(
    MINIMISED_ITEMS_COUNT
  );

  const [numberOfElementsToShowSecond, setNumberOfElementsToShowSecond] =
    useState(MINIMISED_ITEMS_COUNT_SECOND);

  const [seeMore, setSeeMore] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const showElements = () => {
    if (numberOfElementsToShow === MINIMISED_ITEMS_COUNT) {
      setNumberOfElementsToShow(mainSection.length);
    } else {
      setNumberOfElementsToShow(MINIMISED_ITEMS_COUNT);
    }
    setSeeMore((prevState) => {
      return !prevState;
    });
  };

  const showOtherElements = () => {
    if (numberOfElementsToShowSecond === MINIMISED_ITEMS_COUNT_SECOND) {
      setNumberOfElementsToShowSecond(secondSection.length);
    } else {
      setNumberOfElementsToShowSecond(MINIMISED_ITEMS_COUNT_SECOND);
    }
    setShowMore((prevState) => {
      return !prevState;
    });
  };

  return (
    <aside className={classes.leftSideContent}>
      <div className={classes.asideTop}>
        <ul className={classes.listUl}>
          {mainSection.map((item, index) => {
            if (index >= numberOfElementsToShow) {
              return null;
            }
            return (
              <li key={index} className={classes.listLi}>
                <Link to={item.url} className={classes.link}>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className={item.imgClassName}
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}

          <li className={classes.listLi}>
            <button className={classes.btn} onClick={showElements}>
              <FaCircle id={classes.arrowDown}></FaCircle>
              <span>{seeMore ? "Show Less" : "Show More"} </span>
            </button>
          </li>
        </ul>
      </div>

      <div className={classes.asideBottom}>
        <span className={classes.titleBottom}>Your direct links</span>

        <ul className={classes.listUl}>
          {secondSection.map((item, index) => {
            if (index >= numberOfElementsToShowSecond) {
              return null;
            }
            return (
              <li key={index} className={classes.listLi}>
                <Link to={item.url} className={classes.link}>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className={item.imgClassName}
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}

          <li className={classes.listLi}>
            <button className={classes.btn} onClick={showOtherElements}>
              <FaCircle id={classes.arrowDown}></FaCircle>
              <span> {showMore ? "Show Less" : "Show More"} </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftContent;
