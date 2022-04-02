import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Navigation.module.scss";
import { BsFacebook, BsMessenger } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { CgScreen, CgMenuGridO } from "react-icons/cg";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdGroups, MdCircleNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (state) => {
    if (state === "agree") {
      setOpen(false);
      navigate("/auth");
      setIsLoggedIn(!isLoggedIn);
    } else {
      setOpen(false);
    }
  };

  const login = () => {
    navigate("/");
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleAuth = () => {
    isLoggedIn ? login() : handleClickOpen();
  };

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.leftHeader}>
          <div className={classes.logo}>
            <Link to="/">
              <BsFacebook />
            </Link>
          </div>

          <div>
            <form>
              <input
                type="search"
                placeholder="Search on Facebook..."
                className={classes.searchInput}
              />
            </form>
          </div>
        </div>

        <div className={classes.middleHeader}>
          <ul className={classes.middleNavigation}>
            <li>
              <Link to="/">
                <AiFillHome />
              </Link>
            </li>
            <li>
              <Link to="/">
                <CgScreen />
              </Link>
            </li>
            <li>
              <Link to="/">
                <SiHomeassistantcommunitystore />
              </Link>
            </li>

            <li>
              <Link to="/">
                <BsMessenger />
              </Link>
            </li>
            <li>
              <Link to="/">
                <MdGroups />
              </Link>
            </li>
          </ul>
        </div>

        <div className={classes.rightHeader}>
          <nav>
            <ul className={classes.menu}>
              <li className={classes.menuItem}>
                <Link to="/" className={classes.divide}>
                  <FaUserCircle />
                  <span>Alina Urs</span>
                </Link>
              </li>

              <li className={classes.menuItem}>
                <Link to="/menu">
                  <CgMenuGridO />
                </Link>
              </li>

              <li className={classes.menuItem}>
                <Link to="/messenger">
                  <BsMessenger />
                </Link>
              </li>

              <li className={classes.menuItem}>
                <Link to="/notification">
                  <MdCircleNotifications />
                </Link>
              </li>

              <li className={classes.menuItem}>
                <button onClick={toggleAuth}>
                  {isLoggedIn ? "Login" : "Logout"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose("disagree")}>NO</Button>
            <Button
              variant="outlined"
              onClick={() => handleClose("agree")}
              autoFocus
            >
              YES
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Navigation;
