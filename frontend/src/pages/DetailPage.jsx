import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MyInvestments from '../components/MyInvestments'
import OtherInvestments from '../components/OtherInvestments'
import InvestmentDetail from '../components/InvestmentDetail '

export default function DetailPage() {
  return (
    <Container>    
    <Row>
      <Col>
        <MyInvestments />
        <OtherInvestments />
      </Col>
      <Col>
        <InvestmentDetail />
      </Col>
    </Row>

  </Container>
  )
}