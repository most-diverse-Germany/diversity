// company_name: String,
// url_linkedin: String,
// number_employees: Number,
// diversity_total: Number,
// growth_score: Number,
// opportunity_score: Number,
// owner: {
//   type: Schema.Types.ObjectId,
//   ref: 'User',
// },

const axios = require('axios')

// /api/companies/ GET	(empty)	Returns all Api based Companies
const getCompanies = () => {
  return axios
    .get('/api/companies')
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

// /api/companies/ GET	(empty)	Returns top 100 Api based Companies
const getTop100Companies = () => {
  return axios
    .get('/api/companies/top100')
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

export { getCompanies, getTop100Companies }
