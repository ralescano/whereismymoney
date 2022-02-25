import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup'
import { getPortfolio } from "../features/dashboard/dashboardSlice"

export default function Portfolio() {
  const dispatch = useDispatch()
  const { portfolio } = useSelector(state => state.dashboard)
  useEffect(() => {
    dispatch(getPortfolio())
  }, [dispatch])
  return (
    <Card>
      <Card.Title style={{ textAlign: "center" }}>Valor de la cartera ${portfolio.total}</Card.Title>
      <Card.Body>
        <ListGroup as="ol" variant="flush">
          {portfolio.assets.map(a =>
            <ListGroup.Item as="li" key={a.id}
              className="d-flex justify-content-between align-items-start">
              <div>{a.name}</div>
              <div>(AR${a.value})</div>
            </ListGroup.Item>)
          }
        </ListGroup>
      </Card.Body>
    </Card>)
}
