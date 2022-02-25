import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'

function BondsStockType(props) {
  const {
    assetId,
    description,
    amount,
    active,
    handleOnClick
  } = props;
  return (
    <ListGroup.Item as="li" key={assetId}
      active={active}
      action onClick={() => handleOnClick(assetId)}
      className="d-flex justify-content-between align-items-start">
      <div>{description}</div>
      <div>({amount} unidades)</div>
    </ListGroup.Item>
  )
}

BondsStockType.propTypes = {
  assetId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired
}

export default BondsStockType