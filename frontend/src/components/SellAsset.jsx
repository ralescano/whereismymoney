import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SellAsset(props) {
  const { estimatedPrice } = props
  return (
    <Card>
      <Card.Body>
        <Form className="d-flex justify-content-between">
          <Form.Group controlId="SellGroup" className="d-flex align-items-center">
            <Form.Control type="number" />
            <Form.Label> =AR${estimatedPrice}</Form.Label>
          </Form.Group>
          <Button>Vender</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
SellAsset.propTypes = {
  estimatedPrice : PropTypes.number.isRequired
}
export default SellAsset