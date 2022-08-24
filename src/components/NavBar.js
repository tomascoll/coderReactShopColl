const NavBar = () => {
  return(
    <nav>
      <p className="icon"> REACTIVE<span className="shop">SHOP</span> </p>
      <ul className="Ul">
        <li className="Li">
            <a href="">Ropa superior</a>
        </li>
        <li className="Li">
            <a href="">Ropa inferior</a>
        </li>
        <li className="Li">
            <a href="">Accesorios</a>
        </li>
      </ul>
      <p className="carrito"> Carrito</p>
    </nav>
  );
}

export default NavBar;