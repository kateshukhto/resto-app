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
  const deleteItem = (id) => {
    const itemIndex = state.items.findIndex(item => item.id === id);
    return [
        ...state.items.slice(0, itemIndex),
        ...state.items.slice(itemIndex + 1)
    ]
  }
  switch (action.type) {
    case 'MENU_LOADED':
      return {
          ...state,
          menu: action.payload,
          loading: false,
          error: false
      };

    case 'GET_CATEGORIES': 
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
      };
      
    case 'MENU_ERROR':
      return {
            ...state,
            loading: false,
            error: true
        };

    case 'ITEM_ADD_TO_CART':
      {
        const id = action.payload;

        const item = state.menu.find(item => item.id === id);
        const addedItem = {
          ...item,
          total: item.amount * item.price
        };

        const newItems = [
          ...state.items,
          addedItem
        ]
  
        sessionStorage.setItem("items", JSON.stringify(newItems))
  
        return {
          ...state,
          items: newItems
        }
      }

      
    case 'DELETE_FROM_CART':
      {
       const newItems = deleteItem(action.id)
      
        sessionStorage.setItem("items", JSON.stringify(newItems))
  
        return {
          ...state,
          items: newItems
        }
      }

    case 'GET_TOTAL_PRICE':

    return {
      ...state,
      totalPrice: state.items.length === 0 ? 0 : state.items.map(i => i.price * i.amount).reduce((a, b) => a + b)
    }

    case 'INC__AMOUNT': 
    {
      const index = state.items.findIndex(i => i.id === action.id)
      const item = state.items.find(i => i.id === action.id);
      const changeItem = {
        ...item, 
        amount: ++item.amount,
        total: item.amount * item.price
      }
      const newItems = [
        ...state.items.slice(0, index),
        changeItem,
        ...state.items.slice(index + 1)
      ]
  
      sessionStorage.setItem("items", JSON.stringify(newItems))

      return {
        ...state,
        items: newItems
      }
    }

    case 'DCR__AMOUNT': 
    {
      function isZero(n){
        if(n > 0) {
          return --n
        } else {
          return 0
        }
      }

      function getSum(amount, price) {
        if(amount === 0) {
          return 0 
        } else {
          return (amount - 1) * price
        }
      }
  
      const index = state.items.findIndex(i => i.id === action.id)
      const item = state.items.find(i => i.id === action.id);

      const changeItem = {
        ...item, 
        amount: isZero(item.amount) ,
        total: getSum(item.amount, item.price)
      }
      const newItems = [
        ...state.items.slice(0, index),
        changeItem,
        ...state.items.slice(index + 1)
      ]
        
      sessionStorage.setItem("items", JSON.stringify(newItems))
    
      return {
        ...state,
        items: newItems
      }
    }

    case 'SET__MODAL': 
    return {
      ...state,
      isOpenModal: action.isOpenModal,
      isOrdered: null
    }

    case 'SET__ORDERED': 
    {
      let newMenu

      if(action.items) {
        sessionStorage.removeItem("items")
        newMenu = state.menu.map(item => {
          return {
            ...item,
            disable: false
          }
        })
        sessionStorage.setItem("menuItems", JSON.stringify(newMenu))
      }
      
      return {
      ...state,
      menu: newMenu ? newMenu : state.menu,
      items: action.items ? [] : state.items,
      loading: false,
      isOrdered: action.isOrdered,
      totalPrice: action.items ? 0 : state.totalPrice
    }
    }

    case 'SET__LOADING': 
    return {
      ...state,
      loading: action.loading
    }

    case 'SET__ITEMS': 
    return {
      ...state,
      loading: false,
      items: action.items
    }

    case 'SET__DISABLE': 
      {
      const index = state.menu.findIndex(i => i.id === action.id)
      const item = state.menu.find(i => i.id === action.id);
      const changeItem = {
        ...item, 
        disable: action.value
      }
      const newItems = [
        ...state.menu.slice(0, index),
        changeItem,
        ...state.menu.slice(index + 1)
      ]
      
      sessionStorage.setItem("menuItems", JSON.stringify(newItems))
  
      return {
        ...state,
        menu: newItems
      }
    }

    default:
      return state;
  }
}

export default reducers;