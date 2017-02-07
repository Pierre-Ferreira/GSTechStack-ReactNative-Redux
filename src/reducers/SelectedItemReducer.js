export default (state = null, action) => {
  switch (action.type) {
    case 'update_selected_item':
      return action.payload;
    default:
      return state;
  }
};
