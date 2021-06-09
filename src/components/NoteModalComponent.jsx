import React, {useContext} from 'react';
import Popup from 'reactjs-popup';
import { StoreContext } from '../store/StoreProvider';

const NoteModalComponent = ({product}) => {
    
    const {products, addNote, addProduct, text, setText } = useContext(StoreContext)
    
    const onAdd = () => {
        addProduct(product)
        addNote(product, text)
        
    }

  return (  
  <Popup
    trigger={<button className="button"> E </button>}
    modal
    nested
  >
      
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {product.name} </div>
        <div className="content">
        <input 
          placeholder="Todo"
          /* value={text} */
          maxlength="200"
          onChange={e => setText(e.target.value)}
        />
        
        <button onClick={() => onAdd()}> 

            <span onClick={close}>Add Note</span> 

        </button>
        </div>
      </div>
    )}
  </Popup>)
};

export default NoteModalComponent