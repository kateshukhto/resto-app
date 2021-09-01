const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: []
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
          ...state,
          menu: action.payload,
          loading: false,
          error: false
      };
    case 'MENU_REQUESTED':
      return {
          ...state,
          menu: state.menu,
          loading: true,
          error: false
      };
    case 'MENU_ERROR':
      return {
            ...state,
            menu: state.menu,
            loading: true,
            error: true
        };
    case 'ITEM_ADD_TO_CART':
      const id = action.payload;
      const reapeatItems = state.items.findIndex(item => item.id === id);
      if(reapeatItems >= 0) {
        const itemInState = state.items.find(item => item.id === id);
        const newItem = {
          ...itemInState,
          amount: ++itemInState.amount
        }
        return {
          ...state,
          ...state.items.slice(0, reapeatItems),
          newItem,
          ...state.items.slice(reapeatItems + 1)
        }
      }
      const item = state.menu.find(item => item.id === id);
      const newItem = {
        title: item.title,
        url: item.url,
        price: item.price,
        amount: item.amount,
        id: item.id
      };

      return {
        ...state,
        items: [
          ...state.items,
          newItem
        ]
      }
    case 'DELETE_FROM_CART':
      const ind = action.id;
      const itemIndex = state.items.findIndex(item => item.id === ind);

      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      }


    default:
      return state;
  }
}

export default reducers;