import Button from "react-bootstrap/esm/Button";
import PropTypes from 'prop-types';

function Boton ({ variante, texto, onClick, type, size}) {
    return (
        <Button variant={variante} onClick={onClick} type={type} size={size}>
            {texto}
        </Button>
    );
};

Boton.propTypes = {
    variante: PropTypes.string.isRequired,
    link: PropTypes.string,
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.string
};

export default Boton;
