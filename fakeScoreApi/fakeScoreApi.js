// const loginCheck = () => {
//     return (req, res, next) => {
//       // check if the user is logged in
//       if (req.isAuthenticated()) {
//         next();
//       } else {
//         res.redirect('/login');
//       }
//     }
//   }

const fakeScoreApi = (linkedInUrl) => {
  const company_name = linkedInUrl.split('company/')[1].slice(0, -1)
  const number_employees = Math.floor(Math.random() * 5000) + 1
  const diversity_total = Math.floor((Math.random() * 3 + 1) * 100) / 100
  const growth_score = Math.floor((Math.random() * 3 + 1) * 100) / 100
  const opportunity_score = Math.floor((Math.random() * 3 + 1) * 100) / 100

  return {
    company_name,
    number_employees,
    diversity_total,
    growth_score,
    opportunity_score,
  }
}

module.exports = {
  fakeScoreApi,
}
