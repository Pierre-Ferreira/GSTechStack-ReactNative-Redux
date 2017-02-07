import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectedItemReducer from './SelectedItemReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedItem: SelectedItemReducer
});
