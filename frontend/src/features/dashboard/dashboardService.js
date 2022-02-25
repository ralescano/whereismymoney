
export const InvestingTypes = {
  SavingsBank: 'SavingsBank',
  BondsAndStock: 'BondsAndStock'
}

const getMyInvestments = async () => {
  return fetch('http://localhost:5000/api/investments',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())

  // return Promise.resolve([{
  //   id: 1,
  //   type: InvestingTypes.SavingsBank,
  //   description: 'Caja de Ahorro',
  //   amount: 50000,
  //   currentValuation: 50000
  // },
  // {
  //   id: 2,
  //   type: InvestingTypes.BondsAndStock,
  //   description: 'Bonos A23',
  //   amount: 3000,
  //   currentValuation: 300000
  // }, {
  //   id: 3,
  //   type: InvestingTypes.BondsAndStock,
  //   description: 'Acciones Coca-Cola',
  //   amount: 200,
  //   currentValuation: 400000
  // }])
}

const getAssets = async () => {
  return fetch(`http://localhost:5000/api/assets`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
}

const getCurrentValuation = async (id) => {
  return fetch(`http://localhost:5000/api/investments/${id}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())

  // const bondsAndStock = [
  //   { id: 2, description: 'Bonos A23', value: 55 },
  //   { id: 3, description: 'Acciones Coca-Cola', value: 2000 },
  //   { id: 4, description: 'Bonos A42', value: 42 },
  //   { id: 5, description: 'Acciones Apple', value: 5000 },
  // ]
  // return Promise.resolve(bondsAndStock.find(x => x.id === id))
}

const getPortfolio = async () => {
  return fetch(`http://localhost:5000/api/portfolio`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
}

const getInvestmentById = async (assetId) => {
  return fetch(`http://localhost:5000/api/investments/${assetId}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
}

const dashboardService = {
  getMyInvestments,
  getAssets,
  getCurrentValuation,
  getPortfolio,
  getInvestmentById
}

export default dashboardService