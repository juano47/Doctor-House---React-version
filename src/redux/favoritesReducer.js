const initialState = {
  favorites: new Map(),
};

function favoritesReducer(state = initialState, action) {
  const newMap = new Map(state.favorites);
  switch (action.type) {
    case 'favorites/addFavorite':
      newMap.set(action.payload.doctorId, true);
      return {
        ...state,
        favorites: newMap,
      };
    case 'favorites/removeFavorite':
      newMap.set(action.payload.doctorId, false);
      return {
        ...state,
        favorites: newMap,
      };
    default:
      return state;
  }
}

export default favoritesReducer;