import configureStore from './store/configureStore';
import { loadBugs, addBug, resolveBug, assignBugToUser } from './store/bugs';

const store = configureStore();

store.dispatch((loadBugs()));

store.dispatch(addBug({ description: 'b' }));

setTimeout(() => { store.dispatch(resolveBug(1))}, 2000);

setTimeout(() => { store.dispatch(assignBugToUser(1, 1))}, 2000);