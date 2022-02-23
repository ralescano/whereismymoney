import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function BuyAsset(props) {
  const { assetValuation } = props
  const defaultAmount = 1
  const [amount, setAmount] = useState(defaultAmount)
  const [estimatedPrice, setEstimatedPrice] = useState(defaultAmount * assetValuation)
  const handleOnChange = e => {
    setAmount(e.target.value)
  }
  useEffect(() => setEstimatedPrice(amount * assetValuation),
    [assetValuation, amount])

  return (
    <Card className="mb-3">
      <Card.Body>
        <Form className="d-flex justify-content-between">
          <Form.Group controlId="BuyGroup" className="d-flex align-items-start align-items-center">
            <Form.Control type="number" value={amount} onChange={handleOnChange} />
            <Form.Label> =AR${estimatedPrice}</Form.Label>
          </Form.Group>
          <Button>Comprar</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
BuyAsset.propTypes = {
  assetValuation: PropTypes.number.isRequired
}

export default BuyAsset