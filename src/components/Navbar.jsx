import Boton from "./Boton";
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faShoppingCart, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onNavigate, token, onLoginLogout }) => {
  const total = 25000;

  return (
    <nav className="navbar d-flex justify-content-between align-items-center px-3">
      <div className="links d-flex gap-3 align-items-center">
        <p className="fw-bold">Pizzería Mamma Mia!</p>

        <Boton
          variante="outline-light text-light"
          texto={<><FontAwesomeIcon icon={faPizzaSlice} /> Home</>}
          onClick={() => onNavigate('home')}
        />

        {token ? (
          <>
            <Boton
              variante="outline-light text-light"
              texto={<><FontAwesomeIcon icon={faLockOpen} /> Profile</>}
              onClick={() => onNavigate('profile')}
            />
            <Boton
              variante="outline-light text-light"
              texto={<><FontAwesomeIcon icon={faLockOpen} /> Logout</>}
              onClick={onLoginLogout}
            />
          </>
        ) : (
          <>
            <Boton
              variante="outline-light text-light"
              texto={<><FontAwesomeIcon icon={faLock} /> Login</>}
              onClick={() => onNavigate('login')}
            />
            <Boton
              variante="outline-light text-light"
              texto={<><FontAwesomeIcon icon={faLock} /> Register</>}
              onClick={() => onNavigate('register')}
            />
          </>
        )}
      </div>

      <Boton
        variante="outline-light text-light"
        texto={<><FontAwesomeIcon icon={faShoppingCart} /> Total: ${total.toLocaleString()}</>}
        onClick={() => onNavigate('cart')}
      />
    </nav>
  );
};

export default Navbar;
