import { useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import NoteModalComponent from "./NoteModalComponent";

const ProductsContainer = () => {

  const {products, addNote, addProduct, text, setText } = useContext(StoreContext)
  console.log(products)
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            
            <button onClick={() => addProduct(product)}>
              +
            </button>

            <NoteModalComponent product={product}/>

            {/* <button onClick={() => addNote(product, text)}> 

              Add Note
            
            </button> */}
            
            <img src={product.img} alt="" style={{maxWidth:'60px'}}/>
            <h3>{product.name}</h3>
            <p>{product.nota}</p>

          </li>
        ))}
      </ul>
  
     {/*  <input 
          placeholder="Todo"
          value={text}
          onChange={e => setText(e.target.value)}
      />
  */}
    </div>
  )
}

export default ProductsContainer


/*  {  <button onClick={() => dispatch({
                  type: types.productAddNote,
                  payload: {...product, nota: text}
                })}> */