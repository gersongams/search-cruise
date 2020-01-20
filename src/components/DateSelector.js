import React from "react";
import Calendar from "./Calendar";
import { updateDate } from "../store/actions";
import { connect } from "react-redux";

const ConnectedDateSelector = ({ leaving, updateDate }) => {
  const changeDate = value => {
    const { start, end } = leaving;
    if (start !== "" && end !== "") {
      updateDate({ start: value, end: "" });
    } else if (start !== "") {
      if (start === value) {
        updateDate({ start: "", end: "" });
      } else if (value < start) {
        updateDate({ start: value, end: start });
      } else {
        updateDate({ ...leaving, end: value });
      }
    } else {
      updateDate({ ...leaving, start: value });
    }
  };

  const { start, end } = leaving;
  return (
    <div className={"date-selector"}>
      <Calendar year={2018} start={start} end={end} changeDate={changeDate} />
      <Calendar year={2019} start={start} end={end} changeDate={changeDate} />
      <Calendar year={2020} start={start} end={end} changeDate={changeDate} />
    </div>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  updateDate: value => dispatch(updateDate(value))
});

const DateSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDateSelector);

export default DateSelector;
