const { Schema, model } = require("mongoose");

const companySchema = new Schema({
    company_name: String,
    url_linkedin: String,
    number_employees: Number,
    diversity_score: Number,
    growth_score: Number,
    opportunity_score: Number
});

const Company = model("Company", companySchema);

module.exports = Company;
