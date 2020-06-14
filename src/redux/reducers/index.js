import { combineReducers } from 'redux';
import settings from './settingsReducer';
import instruments from './instrumentReducer';
import player from './playerReducer';
import eq from './eqReducer';

const rootReducer = combineReducers({ settings, instruments, player, eq });

export default rootReducer;
