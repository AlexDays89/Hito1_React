import Button from "react-bootstrap/esm/Button";
import PropTypes from 'prop-types';

function Boton ({ variante, link = "#", texto, onClick }) {
    return (
        <Button variant={variante} href={link} onClick={onClick}>
            {texto}
        </Button>
    );
};

Boton.propTypes = {
    variante: PropTypes.string.isRequired,
    link: PropTypes.string,
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Boton;
