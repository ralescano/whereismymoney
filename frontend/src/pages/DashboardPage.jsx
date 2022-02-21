import MySavings from '../components/MySavings'
import AllSavings from '../components/AllSavings'
import Portfolio from '../components/Portfolio'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function DashboardPage() {
  return (
    <Container>
      <Row>
        <div>Dashboard</div>
      </Row>
      <Row>
        <Col>
          <MySavings />
          <AllSavings />
        </Col>
        <Col>
          <Portfolio />
        </Col>
      </Row>

    </Container>
  )
}