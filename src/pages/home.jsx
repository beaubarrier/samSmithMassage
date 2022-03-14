import React, { useState } from "react";
import { getDevice } from "framework7";
import {
  Page,
  PageContent,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Fab,
  FabButton,
  FabButtons,
  Icon,
  Menu,
  Card,
  CardHeader,
} from "framework7-react";
import samLogo from "/assets/samSmithLogo.png";
import samPic from "/assets/samPic.png";
import Main from "./Main";
import Schedule from "./Schedule";

// const device = getDevice();

// const [currentPage, setPage] = useState("main");

// const renderPage = () => {
//   if (currentPage === "schedule") {
//     return <Schedule />;
//   }
//   if (currentPage === "main") {
//     return <Main />;
//   }
// };

export default function HomePage() {
  const [currentPage, setPage] = useState("main");

  const renderPage = () => {
    if (currentPage === "main") {
      return <Main />;
    }
    if (currentPage === "schedule") {
      return <Schedule />;
    }
  };

  return (
    <Page>
      <div>{renderPage()}</div>
      <Fab
        // small
        position="right-bottom"
        text={currentPage}
        id="fabBtn"
        style={{ width: "57%" }}
        link="/scheduleApt"
        onClick={() => {
          setPage("schedule");
        }}
      ></Fab>
    </Page>
  );
}
// export default HomePage;
