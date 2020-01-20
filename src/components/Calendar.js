import React from "react";
import { dates } from "../lib/data";

const Calendar = ({ year, changeDate, start, end }) => (
  <div className="calendar">
    <div className={"calendar__year"}>{year}</div>
    <div className={"calendar__body"}>
      {dates.map((month, index) => {
        const codeMonth = month.value + year * 100;
        const selected = start === codeMonth || end === codeMonth;
        const classNames = ["bubble"];
        const classNamesBG = ["calendar__month"];
        if (selected) classNames.push("bubble--selected");
        if (start <= codeMonth && codeMonth <= end)
          classNamesBG.push("between");
        if (start === codeMonth) classNamesBG.push("bg-start");
        if (end === codeMonth) classNamesBG.push("bg-end");
        return (
          <div
            className={classNamesBG.join(" ")}
            key={index}
            onClick={() => changeDate(codeMonth)}
          >
            <span className={classNames.join(" ")}>
              <div className={"month-text"}>{month.name}</div>
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

export default Calendar;
