import { Fragment } from "react";
import TutorList from "../TutorList";

import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <Fragment>
      <div className="sidebar-content-container" style={{ display: 'flex' }}>
        <MainNavigation />
        <TutorList />
      </div>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;