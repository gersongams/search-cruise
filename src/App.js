import React from "react";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import { connect } from "react-redux";
import Departures from "./components/Departures";
import Destinations from "./components/Destinations";
import DateSelector from "./components/DateSelector";
import MobileNavbar from "./components/MobileNavbar";

const ConnectedApp = ({ navigation, showContent }) => {
  const render = () => {
    const selected = navigation.find(i => i.selected === true);
    // eslint-disable-next-line default-case
    switch (selected.id) {
      case 0:
        return <Destinations />;
      case 1:
        return <Departures />;
      case 2:
        return <DateSelector />;
    }
  };

  return (
    <main className="main">
      <Card className={"only-desktop"}>
        <Navigation />
        <Container>{render()}</Container>
      </Card>
      <div className={"only-mobile app"}>
        <h1>Find a cruise</h1>
        <Navigation />
        {showContent && (
          <Container>
            <MobileNavbar />
            {render()}
          </Container>
        )}
      </div>
    </main>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

const App = connect(mapStateToProps, null)(ConnectedApp);

export default App;
