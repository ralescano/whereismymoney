import { useSelector } from "react-redux"
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup'

export default function Portfolio() {
  const { myInvestments } = useSelector(state => state.dashboard)
  const total = myInvestments.reduce((prev, curr) => prev + curr.currentValuation, 0)

  return (
    <Card>
      <Card.Title style={{textAlign: "center"}}>Valor de la cartera ${total}</Card.Title>
      <Card.Body>
        <ListGroup as="ol" variant="flush">
          {myInvestments.map(s =>
            <ListGroup.Item as="li" key={s.id}
              className="d-flex justify-content-between align-items-start">
              <div>{s.description}</div>
              <div>(AR${s.currentValuation})</div>
            </ListGroup.Item>)
          }
        </ListGroup>
      </Card.Body>
    </Card>)
}
