const { Schema, model } = require('mongoose')

const companySchema = new Schema(
  {
    company_name: String,
    url_linkedin: String,
    number_employees: Number,
    diversity_total: Number,
    growth_score: Number,
    opportunity_score: Number,
  },
  { collection: 'apicompanies' } // -> this is necessary when you use a pre-existing collection
)

const Company = model('Company', companySchema)

module.exports = Company
