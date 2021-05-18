const fakeScoreApi = (linkedInUrl) => {
  const company_name = linkedInUrl.split('company/')[1].slice(0, -1)
  const number_employees = Math.floor(Math.random() * 5000) + 1
  const diversity_total = Math.floor((Math.random() * 2 + 2) * 100) / 100
  const growth_score = Math.floor((Math.random() * 2 + 2) * 100) / 100
  const opportunity_score = Math.floor((Math.random() * 2 + 2) * 100) / 100

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
