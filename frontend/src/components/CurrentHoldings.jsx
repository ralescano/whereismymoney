import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function CurrentHoldings(props) {
  const { description, amount, value } = props;
  const calculatedCurrentValue = amount * value

  return (
    <Card className="mb-3">
      <Card.Header>{description}
      </Card.Header>
      <Card.Body>
        <p>Cantidad: {amount} unidades</p>
        <p>Cotizacion: AR$ {value}/unidad</p>
        <p>Valor Actual: AR$ {calculatedCurrentValue}</p>
      </Card.Body>
    </Card>
  )
}

CurrentHoldings.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}
export default CurrentHoldings