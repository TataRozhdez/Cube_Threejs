import { GET_NEW_CUBE, GET_RANDOM_CUBE, STOP_GAME } from './types'

const initialState = {
  cube: null,
  random: null,
  solve: null,
  play: false,
  // timer: '00:00:00',
  loading: true,
  error: false,
}

export function cubeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEW_CUBE:
      return {
        ...state,
        cube: action.payload,
        error: false,
        loading: false,
      }
    case GET_RANDOM_CUBE:
      return {
        ...state,
        random: action.payload,
        solve: action.solve,
        play: true,
      }
    case STOP_GAME:
      return {
        ...state,
        random: null,
        solve: null,
        play: false,
        loading: false,
        error: false,
      }

    default:
      return state
  }
}
