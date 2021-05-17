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

// /api/usercompanies POST	(empty)	Creates one userCompany
const createUserCompany = (
  //   company_name,
  url_linkedin
  //   diversity_total,
  //   growth_score,
  //   opportunity_score
) => {
  return axios
    .post(`/api/usercompanies`, {
      //   company_name,
      url_linkedin,
      //   diversity_total,
      //   growth_score,
      //   opportunity_score,
    })
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

// /api/usercompanies/ GET	(empty)	Returns all userCompanies
const getAllUserCompanies = () => {
  return axios
    .get('/api/usercompanies')
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

// /api/usercompanies/user/:id GET	(empty)	Returns all userCompanies by Owner
const getUserCompaniesFromUser = (userId) => {
  return axios
    .get(`/api/usercompanies/user/${userId}`)
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

// /api/usercompanies/:id	GET	(empty)	Returns the specified userCompany
const getUserCompany = (userCompanyId) => {
  return axios
    .get(`/api/usercompanies/${userCompanyId}`)
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

// /api/usercompany/:id	PUT	JSON	Edits the specified userCompany
const updateUserCompany = (
  userCompanyId,
  //   company_name,
  url_linkedin
  //   diversity_total,
  //   growth_score,
  //   opportunity_score
) => {
  return axios
    .put(`/api/usercompanies/${userCompanyId}`, {
      //   company_name,
      url_linkedin,
      //   diversity_total,
      //   growth_score,
      //   opportunity_score,
    })
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

// /api/usercompany/:id	DELETE	JSON	Delete specified userCompany
const deleteCompany = (id) => {
  return axios
    .delete(`/api/usercompany/${id}`)
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

export {
  createUserCompany,
  getAllUserCompanies,
  getUserCompany,
  getUserCompaniesFromUser,
  updateUserCompany,
  deleteCompany,
}
