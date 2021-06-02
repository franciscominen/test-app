import {DataProducts} from '../data/DataProducts'

const initialProductState = {
    products: DataProducts,
    cart: []
}

const productReducer = (state, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export {initialProductState};
export default productReducer;