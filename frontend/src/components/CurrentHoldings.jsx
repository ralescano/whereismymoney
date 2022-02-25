import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function CurrentHoldings(props) {
  const { description, amount, value, currentValuation } = props;
  
  return (
    <Card className="mb-3">
      <Card.Header>{description}
      </Card.Header>
      <Card.Body>
        <p>Cantidad: {amount} unidades</p>
        <p>Cotizacion: AR$ {value}/unidad</p>
        <p>Valor Actual: AR$ {currentValuation}</p>
      </Card.Body>
    </Card>
  )
}

CurrentHoldings.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  currentValuation: PropTypes.number.isRequired
}
export default CurrentHoldings