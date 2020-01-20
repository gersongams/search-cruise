import React, { Fragment } from "react";
import Option from "./Option";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import { selectContinent, selectDeparture } from "../store/actions";
import { connect } from "react-redux";

const ConnectedDepartures = ({
  departures,
  selectContinent,
  selectDeparture
}) => {
  const selectedContinent = departures.find(i => i.selected === true);

  const checkHandler = event => {
    const { name } = event.target;
    selectDeparture(name);
  };

  return (
    <Fragment>
      <Menu>
        {departures.map((continent, index) => (
          <MenuItem
            key={index}
            action={selectContinent}
            value={continent.name}
          />
        ))}
      </Menu>
      <div className="option-list">
        {selectedContinent.cities.map((value, index) => (
          <Option
            handler={checkHandler}
            value={value.city}
            key={index}
            checked={value.checked}
          />
        ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  selectDeparture: value => dispatch(selectDeparture(value)),
  selectContinent: value => dispatch(selectContinent(value))
});

const Departures = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDepartures);

export default Departures;
