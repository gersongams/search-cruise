import React from "react";
import { getBack } from "../store/actions";
import { connect } from "react-redux";

const ConnectedMobileNavbar = ({ getBack, navigation }) => {
  const nav = navigation.find(i => i.selected === true);
  return (
    <div className="mobile-navbar">
      <div onClick={getBack} className="blue">
        <i className="icono-caretLeft" />
      </div>
      <div className={"mobile-title"}>{nav.mobile}</div>
      <div className="blue">APPLY</div>
    </div>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  getBack: value => dispatch(getBack(value))
});

const MobileNavbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMobileNavbar);

export default MobileNavbar;
