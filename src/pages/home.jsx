import React from "react";
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
} from "framework7-react";

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large>
      <NavTitleLarge>samSmithMassage logoHere</NavTitleLarge>
    </Navbar>
    <Block>New stuff</Block>
    <PageContent>
      <Fab position="right-bottom" slot="fixed" text="Schedule Appointment">
        {/* <Icon ios="f7:plus" aurora="f7:plus" md="material:add" />
        <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close" />
        <FabButtons position="left">
          <FabButton>1</FabButton>
          <FabButton>2</FabButton>
          <FabButton>3</FabButton>
        </FabButtons> */}
      </Fab>
      <Block id="flavorText">
        World class massage in the comfort of your living room.
      </Block>
    </PageContent>
    {/* Toolbar */}

    {/* <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List> */}
  </Page>
);
export default HomePage;
