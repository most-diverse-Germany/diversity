const { Schema, model } = require('mongoose')

const userCompanySchema = new Schema(
  {
    company_name: String,
    url_linkedin: String,
    number_employees: Number,
    diversity_score: Number,
    growth_score: Number,
    opportunity_score: Number,
  },
  {
    timestamps: true,
  },
  { collection: 'user_companies' } // -> this is necessary when you use a pre-existing collection
)

const UserCompany = model('UserCompany', userCompanySchema)

module.exports = UserCompany
