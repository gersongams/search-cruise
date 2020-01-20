import React from "react";
import NavItem from "./NavItem";
import Button from "./Button";
import { connect } from "react-redux";
import { selectNavigation } from "../store/actions";

const ConnectedNavigation = ({ navigation, selectNavigation }) => {
  return (
    <div className="navigation-bar">
      {navigation.map(i => (
        <NavItem
          key={i.id}
          action={selectNavigation}
          id={i.id}
          label={i.label}
          value={i.value}
          selected={i.selected}
        />
      ))}
      <div className="search">
        <Button>Search cruises</Button>
      </div>
    </div>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  selectNavigation: value => dispatch(selectNavigation(value))
});

const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedNavigation);

export default Navigation;
