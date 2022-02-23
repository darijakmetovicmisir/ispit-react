import { KORISNICKO_IME, REPOZITORIJ, RESET } from "./actions";

const initialState = { user: {}, repository: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case KORISNICKO_IME:
      return { ...state, user: action.payload };
    case REPOZITORIJ:
      return { ...state, repository: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
