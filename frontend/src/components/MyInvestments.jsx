import { useSelector, useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

import { selectCurrentInvestment } from '../features/dashboard/dashboardSlice'
import { InvestingTypes } from '../features/dashboard/dashboardService';
import SavingsBankType from './SavingsBankType';
import BondsStockType from './BondsStockType';

export default function MyInvestments() {
  const { myInvestments, selectedBondStockId } = useSelector(state => state.dashboard)
  const dispatch = useDispatch()
  const handleOnClick = id => dispatch(selectCurrentInvestment(id))

  return (
    <Card style={{ width: '24rem' }} className="mb-3">
      <Card.Header>Mis Inversiones</Card.Header>
      <Card.Body>
        <ListGroup as="ol" variant="flush">
          {myInvestments.map(s => (
            s.type === InvestingTypes.SavingsBank
              ? <SavingsBankType
                key={s.id}
                id={s.id}
                description={s.description}
                amount={s.amount}
              />
              : <BondsStockType
                key={s.id}
                id={s.id}
                description={s.description}
                amount={s.amount}
                active={s.id === selectedBondStockId}
                handleOnClick={handleOnClick}
              />)
          )}
        </ListGroup>
      </Card.Body>
    </Card>)
}