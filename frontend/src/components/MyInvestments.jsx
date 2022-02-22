import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

import { SavingTypes } from '../features/dashboard/dashboardService';

export default function MyInvestments() {
  const { myInvestments } = useSelector(state => state.dashboard)

  return (
    <Card style={{ width: '24rem' }}>
      <Card.Header>Mis Inversiones</Card.Header>
      <Card.Body>
        <ListGroup as="ol" variant="flush">
          {myInvestments.map(s =>
            <ListGroup.Item as="li" key={s.id}
              className="d-flex justify-content-between align-items-start">
              <div>{s.description}</div>
              {s.type === SavingTypes.SavingBank
                ? <div>(AR${s.amount})</div>
                : <div>({s.amount} unidades)</div>
              }
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}