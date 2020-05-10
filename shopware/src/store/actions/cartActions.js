import actionTypes from '../actionTypes'


export const addProductToCart = (product) => {
    return {
        type: actionTypes().cart.add,
        product
    }
}

export const removeFromCart = (id) => {
    return {
        type: actionTypes().cart.remove,
        id
    }
}

export const deleteFromCart = (id) => {
    return {
        type: actionTypes().cart.delete,
        id
    }
}





