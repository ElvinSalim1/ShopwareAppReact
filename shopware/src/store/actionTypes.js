export default () => {
    return {
        productCatalog: {
            set: 'SET_PRODUCTS',
            delete: 'DELETE_PRODUCT'
        },
        
        product: {
            set: 'SET_PRODUCT'
        },

        cart: {
            add: 'ADD_TO_CART',
            remove: 'REMOVE_FROM_CART',
            delete: 'DELETE_FROM_CART'
        }
    }
}