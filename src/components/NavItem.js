import React from "react";
import { connect } from "react-redux";
import { transformDate } from "../lib/data";

const ConnectedNavItem = ({
  label,
  value,
  selected,
  action,
  id,
  destinations,
  departures,
  leaving
}) => {
  let navValue = value;
  let len = false;

  if (id === 0) {
    const checkedDest = destinations.filter(i => i.checked === true);
    if (checkedDest.length > 0) {
      len = checkedDest.length;
      navValue = checkedDest[0].value;
    }
  }

  if (id === 1) {
    const checkedDep = departures
      .reduce((acc, value) => {
        return acc.concat(...value.cities);
      }, [])
      .filter(i => i.checked === true);
    if (checkedDep.length > 0) {
      len = checkedDep.length;
      navValue = checkedDep[0].city;
    }
  }
  let [label1, label2] = label.split(" ");
  if (id === 2) {
    const { start, end } = leaving;
    if (start) {
      navValue = transformDate(start);
    }
    if (end) {
      navValue = navValue + " - " + transformDate(end);
    }
  }

  return (
    <div
      onClick={() => action(id)}
      className={selected ? "navitem navitem--selected" : "navitem"}
    >
      <div>
        <div className="navitem-label">
          <span className={"only-desktop"}>{label1}</span>
          <span>{label2}</span>
          {id === 2 && <span className={"only-mobile"}>{label1}</span>}
        </div>
        <div className="navitem-value">{navValue}</div>
      </div>
      <div className="navitem-icon">
        {len ? (
          <div className="navitem-length">+{len}</div>
        ) : id === 2 ? (
          <i className="icono-calendar" />
        ) : (
          <i className={selected ? "icono-caretUp" : "icono-caretDown"} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

const NavItem = connect(mapStateToProps, null)(ConnectedNavItem);

export default NavItem;
