import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Boton from "./Boton";
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faShoppingCart, faLockOpen, faLock} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const total = 25000;
    const [token, setToken] = useState(false);
    
    const handleLoginLogout = () => {
        setToken(!token);
    };

    return (
        <nav className="navbar d-flex justify-content-between align-items-center px-3">
            <div className="links d-flex gap-3 align-items-center">
                <p className="fw-bold">Pizzería Mamma Mia!</p>

                <Boton variante="outline-light text-light" texto={<><FontAwesomeIcon icon={faPizzaSlice} /> Home</>} link="#"/>
                {token ? (
                    <>
                        <Boton variante="outline-light text-light" texto={<><FontAwesomeIcon icon={faLockOpen} /> Profile</>} link="#" />
                        <Boton variante="outline-light text-light" texto={<><FontAwesomeIcon icon={faLockOpen} /> Logout</>} link="#" onClick={handleLoginLogout} />
                    </>
                ) : (
                    <>
                        <Boton variante="outline-light text-light" texto={<><FontAwesomeIcon icon={faLock} /> Login</>} link="#" onClick={handleLoginLogout} />
                        <Boton variante="outline-light text-light" texto={<><FontAwesomeIcon icon={faLock} /> Register</>} link="#" />
                    </>
                )}
            </div>
            <Button className="me-3" variant="outline-light text-light" href="/">
            <FontAwesomeIcon icon={faShoppingCart} /> Total: ${total.toLocaleString()}
            </Button>
        </nav>
    );
};

export default Navbar;
