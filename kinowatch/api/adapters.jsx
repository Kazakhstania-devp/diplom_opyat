import {Profile} from '../types'; // eslint-disable-line

export const profileAdapter = (data) => ({
  id: data.id,
  firstName: data.first_name,
  lastName: data.last_name,
  avatarUrl: data.avatarUrl
});
