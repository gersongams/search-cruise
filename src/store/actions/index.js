import {
  SELECT_CONTINENT,
  SELECT_DEPARTURE,
  SELECT_DESTINATION,
  SELECT_NAV,
  TOGGLE_SHOW_CONTENT,
  UPDATE_DATE
} from "../types";

export const selectNavigation = payload => ({ type: SELECT_NAV, payload });

export const selectDestination = payload => ({
  type: SELECT_DESTINATION,
  payload
});

export const getBack = payload => ({ type: TOGGLE_SHOW_CONTENT, payload });

export const selectContinent = payload => ({
  type: SELECT_CONTINENT,
  payload
});

export const selectDeparture = payload => ({
  type: SELECT_DEPARTURE,
  payload
});

export const updateDate = payload => ({
  type: UPDATE_DATE,
  payload
});
