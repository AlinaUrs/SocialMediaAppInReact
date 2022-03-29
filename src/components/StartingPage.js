import classes from "./StartingPage.module.scss";
import LeftContent from "./StartingPage/LeftContent/LeftContent";

const StartingPage = () => {
  return (
    <div className={classes.mainContainer}>
      <LeftContent></LeftContent>

      <div className={classes.newsfeed}></div>
      <aside></aside>
    </div>
  );
};

export default StartingPage;
