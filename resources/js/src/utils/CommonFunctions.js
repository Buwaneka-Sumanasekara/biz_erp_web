async function getAccessTokenByState(getState) {
  let state = await getState();
  let userobj = state.user;
  if (userobj.token !== undefined) {
    return userobj.token;
  } else {
    return '';
  }
}

export default {
  getAccessTokenByState: getAccessTokenByState,
};
