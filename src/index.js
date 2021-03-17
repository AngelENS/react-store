import configureStore from './store/configureStore';
import { bugAdded, bugResolved, bugAssignedToUser, getUnresolvedBugs, getBugsByUser} from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();

store.subscribe(() => {
    console.log("Store Change!");
})

store.dispatch(userAdded({ name: 'User 1' }));
store.dispatch(userAdded({ name: 'User 2' }));
store.dispatch(bugAdded({ description: "BUG1" }));
store.dispatch(bugAdded({ description: "BUG2" }));
store.dispatch(bugAdded({ description: "BUG3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(projectAdded({ name: 'Project 1' }));

const assignedBugs = getBugsByUser(1)(store.getState());
console.log(assignedBugs);

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log(unresolvedBugs);
