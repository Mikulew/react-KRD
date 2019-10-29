import types from './types.tsx';

const INITIAL_STATE = {
  debts: [],
  activedDebt: null,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_DEBTS:
      return {
        ...state,
        debts: action.payload.debts,
      };
    case types.ACTIVATE_DEBT:
      return {
        ...state,
        activedDebt: action.payload.debt,
      };
    default:
      return state;
  }
};

export default rootReducer;
