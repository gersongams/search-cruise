import {
  SELECT_CONTINENT,
  SELECT_DEPARTURE,
  SELECT_DESTINATION,
  SELECT_NAV,
  TOGGLE_SHOW_CONTENT,
  UPDATE_DATE
} from "../types";

const initialState = {
  navigation: [
    {
      id: 0,
      label: "cruising to",
      value: "any destination",
      mobile: "Select destination",
      selected: true
    },
    {
      id: 1,
      label: "departing from",
      value: "any port",
      mobile: "Select departure port",
      selected: false
    },
    {
      id: 2,
      label: "leaving",
      value: "any date",
      mobile: "Select travel dates",
      selected: false
    }
  ],
  destinations: [
    {
      id: 0,
      value: "Alaska",
      checked: false
    },
    {
      id: 1,
      value: "Arabian Gulf",
      checked: false
    },
    {
      id: 2,
      value: "Asia",
      checked: true
    },
    {
      id: 3,
      value: "Australia & New Zealand",
      checked: false
    },
    {
      id: 4,
      value: "Bahamas",
      checked: false
    },
    {
      id: 5,
      value: "Bermuda",
      checked: true
    },
    {
      id: 6,
      value: "Canada & New England",
      checked: false
    },
    {
      id: 7,
      value: "Caribbean",
      checked: true
    },
    {
      id: 8,
      value: "Cuba",
      checked: true
    },
    {
      id: 9,
      value: "Europe",
      checked: false
    },
    {
      id: 10,
      value: "Hawaii",
      checked: false
    },
    {
      id: 11,
      value: "Panama Canal",
      checked: false
    },
    {
      id: 12,
      value: "Repositioning",
      checked: false
    },
    {
      id: 13,
      value: "South Pacific",
      checked: false
    },
    {
      id: 14,
      value: "Transatlantic",
      checked: false
    },
    {
      id: 15,
      value: "Transpacific",
      checked: false
    }
  ],
  departures: [
    {
      name: "the Americas & the Caribbean",
      selected: true,
      cities: [
        { city: "Baltimore, Maryland", checked: false },
        { city: "Boston, Massachusetts", checked: true },
        { city: "Cape Liberty, New Jersey", checked: false },
        { city: "Fort Lauderdale, Florida", checked: false },
        { city: "Galveston, Texas", checked: true },
        { city: "Honolulu (Oahu), Hawaii", checked: false },
        { city: "Los Angeles, California", checked: false },
        { city: "Miami, Florida", checked: true },
        { city: "New Orleans, Louisiana", checked: true },
        { city: "Orlando (Port Canaveral), Fl", checked: true },
        { city: "Quebec City, Quebec, Canada", checked: false },
        { city: "San Diego, California", checked: false },
        { city: "San Juan, Puerto Rico", checked: false },
        { city: "Seattle, Washington", checked: false },
        { city: "Seward, Alaska", checked: true },
        { city: "Tampa, Florida", checked: false },
        { city: "Vancouver, British Columbia", checked: false }
      ]
    },
    {
      name: "Europe",
      selected: false,
      cities: [
        { city: "Amsterdam, Netherlands", checked: false },
        { city: "Copenhagen, Denmark", checked: false },
        { city: "Southampton, England", checked: false },
        { city: "Stockholm, Sweden", checked: true },
        { city: "Barcelona, Spain", checked: true },
        { city: "Tarragona, Spain", checked: false },
        { city: "Rome (Civitavecchia), Italy", checked: false },
        { city: "Venice, Italy", checked: false }
      ]
    },
    {
      name: "Asia & SouthPacific",
      selected: false,
      cities: [
        { city: "Beijing (Tianjin), China", checked: false },
        { city: "Brisbane, Australia", checked: false },
        { city: "Hong Kong, China", checked: true },
        { city: "Perth (Fremantle), Australia", checked: true },
        { city: "Shanghai (Baoshan), China", checked: false },
        { city: "Singapore, Singapore", checked: false },
        { city: "Sydney, Australia", checked: false },
        { city: "Tokyo (Yokohama), Japan", checked: false },
        { city: "Dubai, United Arab Emirates", checked: false }
      ]
    }
  ],
  showContent: false,
  leaving: { start: 201802, end: 201808 }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return {
        ...state,
        leaving: action.payload
      };
    case SELECT_DEPARTURE:
      const selectedContinent = state.departures.find(i => i.selected === true);
      const continentName = selectedContinent.name;
      const newCities = selectedContinent.cities;
      const cityIndex = newCities.findIndex(obj => obj.city === action.payload);
      newCities[cityIndex].checked = !newCities[cityIndex].checked;
      let newDeps = [...state.departures];
      const contIndex = newDeps.findIndex(obj => obj.name === continentName);
      newDeps[contIndex].cities = newCities;
      return {
        ...state,
        departures: newDeps
      };
    case SELECT_CONTINENT:
      const newDepartures = [...state.departures].map(i => ({
        ...i,
        selected: false
      }));
      const continentIndex = newDepartures.findIndex(
        obj => obj.name === action.payload
      );
      newDepartures[continentIndex].selected = true;
      return {
        ...state,
        departures: newDepartures
      };
    case TOGGLE_SHOW_CONTENT:
      return {
        ...state,
        showContent: false
      };
    case SELECT_NAV:
      let newNavigation = [...state.navigation].map(i => ({
        ...i,
        selected: false
      }));
      const objIndex = newNavigation.findIndex(
        obj => obj.id === action.payload
      );
      newNavigation[objIndex].selected = true;
      return {
        ...state,
        navigation: newNavigation,
        showContent: true
      };
    case SELECT_DESTINATION:
      let newDestination = [...state.destinations];
      const destinationIndex = newDestination.findIndex(
        obj => obj.value === action.payload
      );
      newDestination[destinationIndex].checked = !newDestination[
        destinationIndex
      ].checked;
      return {
        ...state,
        destinations: newDestination
      };
    default:
      return state;
  }
};

export default rootReducer;
