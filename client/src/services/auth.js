const axios = require('axios')

const signup = (email, firstName, lastName, company, password) => {
  return axios
    .post('/api/auth/signup', {
      email,
      firstName,
      lastName,
      company,
      password,
    })
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

const login = (email, password) => {
  console.log('email' + email)
  return axios
    .post('/api/auth/login', {
      email,
      password,
    })
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

const logout = () => {
  return axios
    .delete('/api/auth/logout')
    .then((response) => response.data)
    .catch((err) => err.response.data)
}

export { signup, logout, login }
