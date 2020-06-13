import { combineReducers } from 'redux';
import settings from './headerReducer';
import instruments from './instrumentReducer';
import player from './footerReducer';

const rootReducer = combineReducers({ settings, instruments, player });

export default rootReducer;
