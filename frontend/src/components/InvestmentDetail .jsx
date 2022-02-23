import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import CurrentHoldings from './CurrentHoldings'
import { getCurrentValuation } from '../features/dashboard/dashboardSlice'
import BuyAsset from './BuyAsset'
import SellAsset from './SellAsset'

function InvestmentDetail(props) {
  const dispatch = useDispatch()
  const { bondStockId } = props;
  const { selectedBondStockValuation, myInvestments } = useSelector(state => state.dashboard)
  useEffect(() => {
    dispatch(getCurrentValuation(bondStockId))
  }, [dispatch, bondStockId])

  const myInvestmentMatch = myInvestments.find(x => x.id === bondStockId)
  const hasAsset = !!myInvestmentMatch
  return (
    <>
      {hasAsset
        ? <CurrentHoldings
          description={selectedBondStockValuation.description}
          amount={myInvestmentMatch.amount}
          value={selectedBondStockValuation.value} />
        : null
      }
      <BuyAsset assetValuation={selectedBondStockValuation.value} />
      {hasAsset ? <SellAsset estimatedPrice={20000} /> : null}
    </>
  )
}
InvestmentDetail.propTypes = {
  bondStockId: PropTypes.number.isRequired
}
export default InvestmentDetail