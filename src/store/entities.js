import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import projectsReducer from './projects';
import usersReducer from './users';

export default combineReducers({
    users: usersReducer,
    bugs:bugsReducer,
    projects: projectsReducer
});