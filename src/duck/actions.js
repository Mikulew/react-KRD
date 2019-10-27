import types from './types.tsx';

export const getDebts = debts => ({
  type: types.GET_DEBTS,
  payload: { debts },
});

export const activateDebt = debt => ({
  type: types.ACTIVATE_DEBT,
  payload: { debt },
});
