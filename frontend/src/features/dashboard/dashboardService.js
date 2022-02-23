
export const InvestingTypes = {
  SavingsBank: 'SavingsBank',
  BondsAndStock: 'BondsAndStock'
}

const getMyInvestments = async () => {
  return Promise.resolve([{
    id: 1,
    type: InvestingTypes.SavingsBank,
    description: 'Caja de Ahorro',
    amount: 50000,
    currentValuation: 50000
  },
  {
    id: 2,
    type: InvestingTypes.BondsAndStock,
    description: 'Bonos A23',
    amount: 3000,
    currentValuation: 300000
  }, {
    id: 3,
    type: InvestingTypes.BondsAndStock,
    description: 'Acciones Coca-Cola',
    amount: 200,
    currentValuation: 400000
  }])
}

const getOtherInvestments = async () => {
  return Promise.resolve([
    {
      id: 4,
      type: InvestingTypes.BondsAndStock,
      description: 'Bonos A42',
      price: 42
    }, {
      id: 5,
      type: InvestingTypes.BondsAndStock,
      description: 'Acciones Apple',
      price: 5000
    }])
}

const getCurrentValuation = async (id) => {
  const bondsAndStock = [
    { id: 2, description: 'Bonos A23', value: 55 },
    { id: 3, description: 'Acciones Coca-Cola', value: 2000 },
    { id: 4, description: 'Bonos A42', value: 42 },
    { id: 5, description: 'Acciones Apple', value: 5000 },
  ]
  return Promise.resolve(bondsAndStock.find(x => x.id === id))
}

const dashboardService = {
  getMyInvestments,
  getOtherInvestments,
  getCurrentValuation
}

export default dashboardService