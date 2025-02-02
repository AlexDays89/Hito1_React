import Button from "react-bootstrap/esm/Button";
import PropTypes from 'prop-types';

function Boton ({ variante, link, texto}) {
    return (
        <Button variant={variante} href={link}>
            {texto}
        </Button>
    );
};

Boton.propTypes = {
    variante: PropTypes.string.isRequired,
    link: PropTypes.string,
    texto: PropTypes.string.isRequired,
};

export default Boton;
