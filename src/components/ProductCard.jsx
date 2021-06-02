import NoteModalComponent from './NoteModalComponent'

const ProductCard = ({product}) => {

    const {name, img, id} = product;

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            margin:'16px',
            width:'30%',
            background:'gray'
        }}>
            <div style={{width:'100%'}}>
                <NoteModalComponent/>
                <button>+</button>
            </div>
            <img src={img} alt="" style={{maxWidth:'70px'}}/>
            <h3>{name}</h3>
        </div>
    )
}

export default ProductCard
