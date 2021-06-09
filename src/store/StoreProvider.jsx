import { createContext, useState, useReducer, useEffect } from 'react'
import { dataProducts } from '../data/dataProducts';
import storeReducer from './storeReducer';

const initialState = {
    products: dataProducts,
    cart: []
}

const StoreContext = createContext(initialState);
const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(storeReducer, initialState, () => {
        const localData = localStorage.getItem('myList');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('myList', JSON.stringify(state))
    }, [state])

    const addProduct = (product) => {
        dispatch ({
            type: 'ADD_PRODUCT',
            payload: product
        })
    }

    const removeProduct = (id) => {
        dispatch ({
            type: 'REMOVE_PRODUCT',
            payload: id
        })
    }

    const clearList = () => {
        dispatch ({
            type: 'CLEAR_LIST',
            payload: state.products
        })
    }

    const [text, setText] = useState('')
    const addNote = (product, nota) => {

        console.log(product, nota)

        dispatch ({
            type: 'ADD_NOTE',
            payload: {...product, nota}
        })
    }

    return (

        <StoreContext.Provider value={{
            products: state.products,
            cart: state.cart,
            addProduct,
            removeProduct,
            clearList,
            addNote,
            text: text,
            setText
        }}>
            {children}
        </StoreContext.Provider>

    )
}
    
export { StoreContext }
export default StoreProvider;