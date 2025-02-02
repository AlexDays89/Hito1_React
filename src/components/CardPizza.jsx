import Card from 'react-bootstrap/Card';
import Boton from './Boton';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function CardPizza({ imagen, titulo, ingredientes, precio}) {
    return (
        <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Card.Img variant="top" src={imagen} alt={`Pizza ${titulo}`} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title className="text-center">Pizza {titulo}</Card.Title>
                    <div className="text-center mb-2">
                        <strong>Ingredientes:</strong> {ingredientes.join(", ")}
                    </div>                    
                    <div className="text-center mb-3">
                        <strong>Precio:</strong> ${precio.toLocaleString()}
                    </div>
                </div>               
                <div className="d-flex justify-content-around mt-auto">
                    <>
                    <Boton variante="outline-dark text-dark" texto={<><FontAwesomeIcon icon={faEye} /> Ver Más</>}/>
                    <Boton variante="outline-dark text-dark" texto={<><FontAwesomeIcon icon={faShoppingCart} /> Añadir</>}/>
                    </>
                </div>
            </Card.Body>
        </Card>
    );
}

CardPizza.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
    precio: PropTypes.number.isRequired,
    colorButton: PropTypes.string,
    textButton: PropTypes.string
};

export default CardPizza;
