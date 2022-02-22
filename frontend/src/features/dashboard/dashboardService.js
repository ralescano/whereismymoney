
export const SavingTypes = {
  SavingBank: 'SavingBank',
  BondsAndStock: 'BondsAndStock'
}

const getMyInvestments = async () => {
  return Promise.resolve([{
    id: 1,
    type: SavingTypes.SavingBank,
    description: 'Caja de Ahorro',
    amount: 50000,
    currentValuation: 50000
  },
  {
    id: 2,
    type: SavingTypes.BondsAndStock,
    description: 'Bonos A23',
    amount: 3000,
    currentValuation: 300000
  }, {
    id: 3,
    type: SavingTypes.BondsAndStock,
    description: 'Acciones Coca-Cola',
    amount: 200,
    currentValuation: 400000
  }])
}

const getOtherInvestments = async () => {
  return Promise.resolve([
    {
      id: 4,
      type: SavingTypes.BondsAndStock,
      description: 'Bonos A42',
      price: 42
    }, {
      id: 5,
      type: SavingTypes.BondsAndStock,
      description: 'Acciones Apple',
      price: 5000
    }])
}

const dashboardService = {
  getMyInvestments,
  getOtherInvestments
}

export default dashboardService