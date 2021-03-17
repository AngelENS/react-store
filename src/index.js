import store from './redux/store';
import * as actions from './redux/actions';

store.subscribe(() => {
    console.log("Store Change!");
})

//store.dispatch(actions.bugAdded("BUG1"));
//store.dispatch(actions.bugAdded("BUG2"));
//store.dispatch(actions.bugAdded("BUG3"));
//store.dispatch(actions.bugResolved(1));

console.log(store.getState());