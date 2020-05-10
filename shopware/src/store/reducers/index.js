import { combineReducers } from 'redux'
import productCatalog from './productCatalogReducer'
import product from './productReducer'
import cart from './cartReducer'


export default combineReducers({
    productCatalog,
    product,
    cart
})