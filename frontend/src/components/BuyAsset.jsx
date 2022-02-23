import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function BuyAsset(props) {
  const { estimatedPrice } = props

  return (
    <Card className="mb-3">
      <Card.Body>
        <Form className="d-flex justify-content-between">
          <Form.Group controlId="BuyGroup" className="d-flex align-items-start align-items-center">
            <Form.Control />
            <Form.Label> =AR${estimatedPrice}</Form.Label>
          </Form.Group>
          <Button>Comprar</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
BuyAsset.propTypes = {
  estimatedPrice: PropTypes.number.isRequired,
}

export default BuyAsset