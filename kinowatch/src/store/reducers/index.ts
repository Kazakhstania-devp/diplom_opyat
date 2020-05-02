import {combineReducers} from 'redux';

import {musicReducer} from './music/music';
import {userReducer} from './user/user';
import {playerReducer} from './player/player';

import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.MUSIC]: musicReducer,
  [NameSpace.USER]: userReducer,
  [NameSpace.PLAYER]: playerReducer,
});
