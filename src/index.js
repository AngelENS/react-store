import store from './redux/store';
import { bugAdded, bugRemoved, bugResolved } from './redux/actions';

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState())
})

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugResolved(1));
unsubscribe();
store.dispatch(bugRemoved(1));
console.log(store.getState());