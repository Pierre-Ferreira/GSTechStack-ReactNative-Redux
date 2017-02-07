export default (selectedItem = '', action) => {
  if (action.type === 'update_selected_item') {
    selectedItem = action.payload;
    return selectedItem;
  }
  return selectedItem;
};
