const getters = {
  token: state => state.user.token,
  roles: state => state.user.accountInfo.username
};
export default getters;
