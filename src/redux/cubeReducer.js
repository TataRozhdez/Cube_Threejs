import { GET_NEW_CUBE } from './types'

const initialState = {
  cube: [],
  loading: true,
  error: false,
}

export function cubeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEW_CUBE:
      return {
        cube: [...action.payload],
        error: false,
        loading: false,
      }

    default:
      return state
  }
}
