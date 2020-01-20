import React, { Fragment } from "react";
import Option from "./Option";
import { connect } from "react-redux";
import { selectDestination } from "../store/actions";

const ConnectedDestinations = ({ destinations, selectDestination }) => {
  const checkHandler = event => {
    const { name } = event.target;
    selectDestination(name);
  };

  return (
    <Fragment>
      <div className="option-list">
        {destinations.map(destination => (
          <Option
            handler={checkHandler}
            value={destination.value}
            key={destination.id}
            checked={destination.checked}
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
  selectDestination: value => dispatch(selectDestination(value))
});

const Destinations = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDestinations);

export default Destinations;
