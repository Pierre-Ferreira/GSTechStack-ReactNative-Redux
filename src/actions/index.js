export const selectedLibrary = (libraryID) => {
  return { type: 'update_selected_item', payload: libraryID };
};
