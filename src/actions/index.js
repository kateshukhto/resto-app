const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
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

const setModal = (isOpenModal) => {
  return {
    type: 'SET__MODAL',
    isOpenModal
  }
}

const setOrdered = (isOrdered) => {
  return {
    type: 'SET__ORDERED',
    isOrdered
  }
}

const setLoading = (loading) => {
  return {
    type: 'SET__LOADING',
    loading
  }
}

const setItems = (items) => {
  return {
    type: 'SET__ITEMS',
    items
  }
}

const setDisable = (id, value) => {
  return {
    type: 'SET__DISABLE',
    id, 
    value
  }
}

export {
  menuLoaded,
  menuError,
  addedToCart,
  deleteFromCart, 
  getTotalPrice,
  getCategories,
  incAmount, 
  dcrAmount,
  setModal,
  setOrdered,
  setLoading,
  setItems, 
  setDisable
}