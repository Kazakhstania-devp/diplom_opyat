import {ActionType} from '../../action-types';
import {profileAdapter} from '../../../api/adapters';

import {GenericAction} from '../../actions'; // eslint-disable-line
import {Profile} from '../../../types';

interface DataState {
  readonly profile: Profile,
}

const initialState: DataState = {
  profile: null,
};

export const userReducer = (state: DataState = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    default: return state;
  }
};
