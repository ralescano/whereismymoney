import ListGroup from 'react-bootstrap/ListGroup'

export default function SavingsBankType(props) {
  const { id, description, amount } = props;

  return (
    <ListGroup.Item as="li" key={id}
      className="d-flex justify-content-between align-items-start">
      <div>{description}</div>
      <div>(AR${amount})</div>
    </ListGroup.Item>
  )
}