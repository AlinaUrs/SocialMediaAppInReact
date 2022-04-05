import Navigation from "./Navigation";
import RightContent from "./StartingPage/RightContent/RightContent";

const Layout = (props) => {
  return (
    <div>
      <Navigation></Navigation>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
