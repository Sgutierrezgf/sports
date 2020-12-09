const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_DEPORTES':
      return {
        ...state,
        myDeportes: [...state.myDeportes, action.payload],
      };
      case 'DELETE_DEPORTES':
      return {
        ...state,
        myDeportes: state.myDeportes.filter(items => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
