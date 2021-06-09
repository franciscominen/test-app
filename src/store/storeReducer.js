const storeReducer = (state, action) => {
    switch(action.type) {

        case 'ADD_PRODUCT': {
            const newProduct = action.payload;
            const cartContainProduct = state.cart.find(
                product => product.id === newProduct.id
            )

            return cartContainProduct
            ? {
                ...state,
                cart: state.cart.map(product => 
                    product.id === newProduct.id
                    ? {...product }
                    : product    
                )
            }
            : {
                ...state,
                cart: [
                    ...state.cart,
                    {...action.payload}
                ]
            }
        }

        case 'ADD_NOTE': {
            const oldState = state

            const productEdit = action.payload;
            const productIndex = state.products.indexOf({...productEdit, nota: ''})
            oldState.products[productIndex] = productEdit
            if ( oldState.cart.length ) {
                const productFilter = oldState.cart.filter(product => product.id === productEdit.id)
                if (productFilter.length) {
                   const productFilterIndex = oldState.cart.indexOf(productFilter[0])
                   oldState.cart[productFilterIndex] = productEdit
                } else {
                    oldState.cart.push(productEdit)
                }
            }
            
            return oldState
        }

        case 'REMOVE_PRODUCT':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
    

        case 'CLEAR_LIST':
            return {
                ...state,
                cart: []
            }
            
        default:
            return state;
    }
}

export default storeReducer