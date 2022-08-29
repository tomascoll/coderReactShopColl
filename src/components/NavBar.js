import CartWidget from "./CartWidget";

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
      <CartWidget></CartWidget>
    </nav>
  );
}

export default NavBar;