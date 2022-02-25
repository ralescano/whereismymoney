import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import CurrentHoldings from './CurrentHoldings'
import { getInvestmentById } from '../features/dashboard/dashboardSlice'
import BuyAsset from './BuyAsset'
import SellAsset from './SellAsset'

function InvestmentDetail(props) {
  const dispatch = useDispatch()
  const { assetId } = props;
  const { selectedAsset, isOtherInvestmentSelected } = useSelector(state => state.dashboard)
  useEffect(() => {
    if (assetId && !isOtherInvestmentSelected)
      dispatch(getInvestmentById(assetId))
  }, [dispatch, assetId, isOtherInvestmentSelected])

  return (
    <>
      {!isOtherInvestmentSelected
        ? <CurrentHoldings
          description={selectedAsset.name}
          amount={selectedAsset.amount}
          value={selectedAsset.value}
          currentValuation={selectedAsset.valuation}
        />
        : null
      }
      <BuyAsset assetValuation={selectedAsset.valuation} />
      {!isOtherInvestmentSelected
        ? <SellAsset
          assetValuation={selectedAsset.valuation}
          maxAmount={selectedAsset.amount} />
        : null}
    </>
  )
}
InvestmentDetail.propTypes = {
  assetId: PropTypes.string.isRequired
}
export default InvestmentDetail