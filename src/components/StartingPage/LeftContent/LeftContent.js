import { Link } from "react-router-dom";
import classes from "./LeftContent.module.scss";
import userPic from "../../../assets/profile.jpg";
import friendsPic from "../../../assets/friends.png";
import memoriesPic from "../../../assets/memories.png";
import groupsPic from "../../../assets/groups.png";
import marketplacePic from "../../../assets/marketplace.png";
import watchPic from "../../../assets/watch.png";
import { FaArrowAltCircleDown } from "react-icons/fa";
import groupOne from "../../../assets/itjobs.png";
import favoriteGroup from "../../../assets/techno.png";
import chiriePic from "../../../assets/chiriecluj.jpg";
import itClujJobs from "../../../assets/itclujjobs.jpg";
import shareClosePic from "../../../assets/shareyour.jpg";

const LeftContent = () => {
  return (
    <aside className={classes.leftSideContent}>
      <div className={classes.asideTop}>
        <ul className={classes.listUl}>
          <li className={classes.listLi}>
            <Link to="/profile" className={classes.link}>
              <img
                src={userPic}
                alt="Profile Picture"
                className={classes.userPic}
              />
              <span>Alina Florina Urs</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/friends" className={classes.link}>
              <img src={friendsPic} alt="Friends Icon" />
              <span>Friends</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/memories" className={classes.link}>
              <img src={memoriesPic} alt="Memories on Facebook" />
              <span>Memories</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/groups" className={classes.link}>
              <img src={groupsPic} alt="Your groups on Facebook" />
              <spna>Groups</spna>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/marketplace" className={classes.link}>
              <img src={marketplacePic} alt="Marketplace icon" />
              <span>Marketplace</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/watch" className={classes.link}>
              <img src={watchPic} alt="Watch page icon" />
              <span>Watch</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="./seemore" className={classes.link}>
              <FaArrowAltCircleDown
                id={classes.arrowDown}
              ></FaArrowAltCircleDown>
              <span>See more</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.asideBottom}>
        <span className={classes.titleBottom}>Your direct links</span>

        <ul className={classes.listUl}>
          <li className={classes.listLi}>
            <Link to="/groupJ" alt="group" className={classes.link}>
              <img
                src={groupOne}
                alt="Group access"
                className={classes.groupIcon}
              />
              <span>Junior IT Jobs Romania</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/technogroup" className={classes.link}>
              <img src={favoriteGroup} alt="Favorite group" />
              <span>Techno insiders London Night</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/chirie" className={classes.link}>
              <img
                src={chiriePic}
                alt="Grup chirie Cluj"
                className={classes.groupIcon}
              />
              <span>Chirie Cluj-Napoca</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/" className={classes.link}>
              <img
                src={itClujJobs}
                alt="IT Cluj Jobs group"
                className={classes.groupIcon}
              />
              <span>IT Cluj Jobs</span>
            </Link>
          </li>
          <li className={classes.listLi}>
            <Link to="/" className={classes.link}>
              <img
                src={shareClosePic}
                alt="Share your closet group"
                className={classes.groupIcon}
              />
              <span>Share your closet Cluj</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftContent;
