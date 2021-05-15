const axios = require('axios')

const update = (id, email, firstName, lastName, company, password) => {
  return axios
    .put(`/api/users/${id}`, {
      email,
      firstName,
      lastName,
      company,
      password,
    })
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

export { update }
