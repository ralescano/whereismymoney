import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function BuyAsset(props) {
  const { assetValuation } = props
  const [amount, setAmount] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState('')
  const handleOnChange = e => setAmount(e.target.value)
  const hasError = () => (amount < 1)
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
  }, [assetValuation, amount])

  return (
    <Card className="mb-3">
      <Card.Body>
        <Form className="d-flex justify-content-between">
          <Form.Group controlId="BuyGroup" className="d-flex align-items-start align-items-center">
            <Form.Control
              type="number" value={amount} isInvalid={isInvalid}
              onBlur={handleOnBlur} onChange={handleOnChange}
            />
            {isInvalid
              ? <Form.Control.Feedback type="invalid">Min: 1</Form.Control.Feedback>
              : null
            }
            <Form.Label> =AR${estimatedPrice}</Form.Label>
          </Form.Group>
          <Button onClick={handleOnClick}>Comprar</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
BuyAsset.propTypes = {
  assetValuation: PropTypes.number.isRequired
}

export default BuyAsset