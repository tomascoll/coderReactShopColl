import logoCart from './assets/cart.png'

const CartWidget = () => {
    return(
        <div className='centrar'>
        <div className='contador'>
        <div className='numero'>7</div>
        </div>
        <img className="carrito" src={logoCart}/>
        </div>
    );
  }
  
export default CartWidget;