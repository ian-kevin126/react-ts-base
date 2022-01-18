import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './user.store';
import tagsViewReducer from './tags-view.store';

const rootReducer = combineReducers({
    user: userReducer,
    tagsView: tagsViewReducer
});

export default rootReducer;
