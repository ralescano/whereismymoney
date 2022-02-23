import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { getMyInvestments } from '../features/dashboard/dashboardSlice'
import MyInvestments from '../components/MyInvestments'
import OtherInvestments from '../components/OtherInvestments'
import InvestmentDetail from '../components/InvestmentDetail '
import Portfolio from '../components/Portfolio'

export default function DashboardPage() {
  const { selectedBondStockId } = useSelector(state => state.dashboard)
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
          {selectedBondStockId
            ? <InvestmentDetail bondStockId={selectedBondStockId} />
            : <Portfolio />
          }
        </Col>
      </Row>
    </Container>
  )
}