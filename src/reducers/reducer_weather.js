import FETCH_WEATHER from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Concat our old array of city with new cities
      // [city1, city2, city3] , NOT [city1,[city2,[city3]]]
      return [action.payload.data, ...state];
  }
  return state;
}
