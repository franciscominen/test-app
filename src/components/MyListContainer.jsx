import { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import NoteModalComponent from "./NoteModalComponent";

const MyListContainer = () => {
  
  const {cart, removeProduct, clearList } = useContext(StoreContext)

  return (
    <div>
      <h2>My List</h2>
      <ul>
          {cart.map(product => (
              <li key={product.id}>

                <img src={product.img} alt="" style={{maxWidth:'60px'}}/>
                <h3>{product.name}</h3>

                <p>{product.nota}</p>

                <button onClick={() => removeProduct(product.id)}>
                X
                </button>
                
                <NoteModalComponent product={product}/>

              </li>
          ))}
      </ul>
              
      <button onClick={() => clearList()}>CLEAR</button>
       
    </div>
  )
}

export default MyListContainer