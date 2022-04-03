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
import { FaArrowAltCircleDown } from "react-icons/fa";

const RightContent = () => {
  return (
    <aside className={classes.rightContentSide}>
      <div className={classes.contacts}>
        <h3 className={classes.contactsTitle}>Contacts chat</h3>
        <ul className={classes.listUlRight}>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={firstUser}
                alt="First Contact Chat"
                className={classes.userPic}
              />
              <span>Alfred Cochran</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={secondUser}
                alt="Second user chat"
                className={classes.userPic}
              />
              <span>Jayce Hubbard</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={thirdUser}
                alt="Third user chat"
                className={classes.userPic}
              />
              <span>Dayanara Dominguez</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={forthUser}
                alt="Forth user chat"
                className={classes.userPic}
              />
              <span>Eli Kaise</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={fifthUser}
                alt="Fifth user chat"
                className={classes.userPic}
              />
              <span>Geovanni Jeffreson</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={sixthUser}
                alt="Sixth user chat"
                className={classes.userPic}
              />
              <span>Kallie Bailey</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={seventhUser}
                alt="Seventh user chat"
                className={classes.userPic}
              />
              <span> Kaydence Crosby</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={eightUser}
                alt="Eight user chat"
                className={classes.userPic}
              />
              <span>Lena Parks</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={ninthUser}
                alt="Ninth user chat"
                className={classes.userPic}
              />
              <span>Elijah Clark</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="/" className={classes.link}>
              <img
                src={tenthUser}
                alt="Tenth user chat"
                className={classes.userPic}
              />
              <span>Cohen Levy</span>
            </Link>
          </li>
          <li className={classes.listLiRight}>
            <Link to="./seemore" className={classes.link}>
              <FaArrowAltCircleDown
                id={classes.arrowDown}
              ></FaArrowAltCircleDown>
              <span>More contacts</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightContent;
