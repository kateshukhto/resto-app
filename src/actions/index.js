const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  }
}

const menuError = () => {
  return {
    type: 'MENU_ERROR',
  }
}
const addedToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  }
}
const deleteFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    id
  }
}

const getTotalPrice = () => { 
  return {
    type: 'GET_TOTAL_PRICE'
  }
}

const getCategories = () => {
  return {
    type: 'GET_CATEGORIES'
  }
}

const toggleActive = (isActive) => {
  return {
    type: 'TOGGLE_ACTIVE',
    isActive
  }
}

const incAmount = (id) => {
  return {
    type: "INC__AMOUNT",
    id
  }
}

const dcrAmount = (id) => {
  return {
    type: 'DCR__AMOUNT',
    id
  }
}

export {
  menuLoaded,
  menuRequested,
  menuError,
  addedToCart,
  deleteFromCart, 
  getTotalPrice,
  getCategories,
  toggleActive, 
  incAmount, 
  dcrAmount
}