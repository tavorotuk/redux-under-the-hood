import { actions as amountActions } from './store/amount.js';
import { actions as goodsActions } from './store/goods.js';
import { actions as positionActions } from './store/position.js';
import { store } from './store/index.js';

const { dispatch, subscribe, getState } = store;

const state = getState();
console.log(state);

const unsubscribe = subscribe(() => {
  const state = getState();
  console.log(state);
});

dispatch(positionActions.moveUp())
dispatch(positionActions.moveUp())
dispatch(positionActions.moveLeft())
dispatch(amountActions.add(30))
dispatch(amountActions.add(10))
dispatch(goodsActions.add('banana'))
dispatch(goodsActions.add('apple'))
dispatch(goodsActions.take(40))
dispatch(goodsActions.clear())

// unsubscribe();
