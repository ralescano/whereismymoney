import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMyInvestments } from '../features/dashboard/dashboardSlice'
import MyInvestments from '../components/MyInvestments'
import OtherInvestments from '../components/OtherInvestments'
import Portfolio from '../components/Portfolio'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function DashboardPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyInvestments())
  }, [dispatch])
  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
      <Row>
        <Col>
          <MyInvestments />
          <OtherInvestments />
        </Col>
        <Col>
          <Portfolio />
        </Col>
      </Row>

    </Container>
  )
}