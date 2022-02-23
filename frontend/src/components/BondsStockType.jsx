import ListGroup from 'react-bootstrap/ListGroup'

export default function BondsStockType(props) {
  const {
    id,
    description,
    amount,
    active,
    handleOnClick
  } = props;
  return (
    <ListGroup.Item as="li" key={id}
      active={active}
      action onClick={() => handleOnClick(id)}
      className="d-flex justify-content-between align-items-start">
      <div>{description}</div>
      <div>({amount} unidades)</div>
    </ListGroup.Item>
  )
}