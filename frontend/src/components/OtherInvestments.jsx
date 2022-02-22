import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

import { getOtherInvestments } from '../features/dashboard/dashboardSlice'

export default function OtherInvestments() {
  const { otherInvestments } = useSelector(state => state.dashboard)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOtherInvestments())
  }, [dispatch])

  return (
    <Card style={{ width: '24rem' }}>
      <Card.Header>Otras Inversiones</Card.Header>
      <Card.Body>
        <ListGroup as="ol" variant="flush">
          {otherInvestments.map(s =>
            <ListGroup.Item as="li" key={s.id}
              className="d-flex justify-content-between align-items-start">
              <div>{s.description}</div>
              <div>(AR$ {s.price}/unidad)</div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}