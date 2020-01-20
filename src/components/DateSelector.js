import React from "react";
import Calendar from "./Calendar";
import { updateDate } from "../store/actions";
import { connect } from "react-redux";

class ConnectedDateSelector extends React.Component {
  state = {
    start: "",
    end: ""
  };

  handleDate = () => {
    const { start, end } = this.state;
    const { updateDate } = this.props;
    updateDate({ start, end });
  };

  changeDate = value => {
    const { start, end } = this.state;
    if (start !== "" && end !== "") {
      this.setState({ start: value, end: "" }, () => this.handleDate());
    } else {
      if (start !== "") {
        if (start === value) {
          this.setState({ end: "", start: "" }, () => this.handleDate());
        } else {
          if (value < start) {
            this.setState({ end: start, start: value }, () =>
              this.handleDate()
            );
          } else {
            this.setState({ end: value }, () => this.handleDate());
          }
        }
      } else {
        this.setState({ start: value }, () => this.handleDate());
      }
    }
  };

  render() {
    const { start, end } = this.state;
    return (
      <div className={"date-selector"}>
        <Calendar
          year={2018}
          start={start}
          end={end}
          changeDate={this.changeDate}
        />
        <Calendar
          year={2019}
          start={start}
          end={end}
          changeDate={this.changeDate}
        />
        <Calendar
          year={2020}
          start={start}
          end={end}
          changeDate={this.changeDate}
        />
      </div>
    );
  }
}

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
