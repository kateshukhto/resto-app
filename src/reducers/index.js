const initialState = {
  menu: [],
  categories: [],
  loading: true,
  error: false,
  items: [], 
  totalPrice: 0,
  isOpenModal: false,
  isOrdered: null
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

    case 'GET_CATEGORIES': {
      return {
        ...state,
        categories: state.menu.map(i => {
          return {
            category: i.category,
            img: i.img
          }
        }).filter((el, index, self) =>
        index === self.findIndex((t) => (
          t.category === el.category && t.img === el.img
        ))
      )
      }
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
        id: item.id,
        total: item.total
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

    case 'GET_TOTAL_PRICE':

    return {
      ...state,
      totalPrice: state.items.length === 0 ? 0 : state.items.map(i => i.price * i.amount).reduce((a, b) => a + b)
    }

    case 'INC__AMOUNT': 

    const CInd = state.items.findIndex(i => i.id === action.id)
    const CItem = state.items.find(i => i.id === action.id);
    const changeItem = {
      ...CItem, 
      amount: ++CItem.amount,
    }

    return {
      ...state,
      items: [
        ...state.items.slice(0, CInd),
        changeItem,
        ...state.items.slice(CInd + 1)
      ]
    }

    case 'DCR__AMOUNT': 

    function isPositive(n){
      if(n > 0) {
        return --n
      } else {
        return 0
      }
    }

    const DInd = state.items.findIndex(i => i.id === action.id)
    const DItem = state.items.find(i => i.id === action.id);
    const DchangeItem = {
      ...DItem, 
      amount: isPositive(DItem.amount) 
    }

    return {
      ...state,
      items: [
        ...state.items.slice(0, DInd),
        DchangeItem,
        ...state.items.slice(DInd + 1)
      ]
    }

    case 'GET__PRICE__OF__CERTAIN__ITEM': {

      const ind = state.items.findIndex(i => i.id === action.id)
      const item = state.items.find(i => i.id === action.id);
      const changeItem = {
        ...item, 
        total: item.amount * item.price
      }
  
      return {
        ...state,
        items: [
          ...state.items.slice(0, ind),
          changeItem,
          ...state.items.slice(ind + 1)
        ]
      }
    }

    case 'SET__MODAL': 
    return {
      ...state,
      isOpenModal: action.isOpenModal
    }

    case 'SET__ORDERED': 
    return {
      ...state,
      items: [],
      loading: false,
      isOrdered: action.isOrdered,
      totalPrice: 0
    }

    case 'SET__LOADING': 
    return {
      ...state,
      loading: action.loading
    }

    default:
      return state;
  }
}

export default reducers;