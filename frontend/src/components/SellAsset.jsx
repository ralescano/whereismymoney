import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SellAsset(props) {
  const { assetValuation, maxAmount } = props
  const [amount, setAmount] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState('')
  const handleOnChange = e => setAmount(e.target.value)
  const hasError = () => (amount < 1 || amount > maxAmount)
  const handleOnClick = () => {
    if (hasError()) return
    // TODO call API
  }
  const handleOnBlur = () => {
    setIsInvalid(hasError())
  }
  useEffect(() => {
    if (amount < 0)
      setEstimatedPrice(0)
    else
      setEstimatedPrice(amount * assetValuation)
  },
    [assetValuation, amount])

  return (
    <Card>
      <Card.Body>
        <Form className="d-flex justify-content-between">
          <Form.Group controlId="SellGroup" className="d-flex align-items-center">
            <Form.Control
              type="number" value={amount} isInvalid={isInvalid}
              onChange={handleOnChange} onBlur={handleOnBlur}
            />
            {isInvalid
              ? <Form.Control.Feedback type="invalid">Min: 1 - Max: {maxAmount}</Form.Control.Feedback>
              : null
            }
            <Form.Label> =AR${estimatedPrice}</Form.Label>
          </Form.Group>
          <Button onClick={handleOnClick}>Vender</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
SellAsset.propTypes = {
  assetValuation: PropTypes.number.isRequired,
  maxAmount: PropTypes.number.isRequired
}
export default SellAsset