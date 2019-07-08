import { DEFAULT_STATE } from '../constants/defaults';

export default function screenReducer(state = DEFAULT_STATE, action){
  switch(action.type) {
    case "WINDOW_RESIZE":
      return {
        ...state,
        windowWidth: action.payload.windowWidth,
        windowHeight: action.payload.windowHeight
      }
    case 'CHANGE_MAP_LOADED':
      return {
        ...state,
        mapLoaded: action.payload.mapLoaded
      }
    case 'CHANGE_DATA':
      return {
        ...state,
        data: action.payload.data
      }
    case 'CHANGE_CURRENT_IDX':
      return {
        ...state,
        currentIdx: action.payload.currentIdx
      }
    case 'CHANGE_DATA_STATUS':
      return {
        ...state,
        dataStatus: action.payload.dataStatus
      }
  }

  return state;
};


