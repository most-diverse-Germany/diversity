// CompaniesList
import React, { Component } from 'react'
import CompanyRow from './CompanyRow'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import Button from './Utilities/Button'

export class CompaniesList extends Component {
  state = {
    displayAll: false,
  }
  clickHandler = () => {
    this.setState((state) => ({
      displayAll: !this.state.displayAll,
    }))
  }
  render() {
    if (!this.props.companies || !this.props.companies.length)
      return <Spinner color={this.props.color} />
    return (
      <div
        style={{
          minHeight: '500px',
          backgroundColor: this.props.backgroundColor,
          marginTop: 0,
        }}
      >
        {this.props.companies
          .map((company) => company)
          .splice(0, this.state.displayAll ? 100 : 10)
          .filter((company) => {
            return company.company_name
              .toLowerCase()
              .includes(this.props.searchTerm.toLowerCase())
          })
          .map((company) => (
            <Link to={`/companies/${company._id}`}>
              <CompanyRow
                company={company}
                text={'white'}
                color={this.props.color}
                backgroundColor={this.props.backgroundColor}
                listColor={'#679364'}
              />
            </Link>
          ))}
        {this.state.displayAll === false && this.props.searchTerm === '' && (
          <Button
            // type='submit'
            className={'active:tw-bg-opacity-80 tw-w-full md:tw-w-1/4 tw-mt-5'}
            style={{ height: '50px' }}
            text={'SHOW MORE'}
            color={'white'}
            backgroundColor={'#EE9CB2'}
            fillColor={'#7788C3'}
            // symbol={<ArrowRight />}
            onClick={this.clickHandler}
          />
        )}
        {this.state.displayAll === true && this.props.searchTerm === '' && (
          <Button
            // type='submit'
            className={'active:tw-bg-opacity-80 tw-w-full md:tw-w-1/4 tw-mt-5'}
            style={{ height: '50px' }}
            text={'SHOW LESS'}
            color={'white'}
            backgroundColor={'#EE9CB2'}
            fillColor={'#7788C3'}
            // symbol={<ArrowRight />}
            onClick={this.clickHandler}
          />
        )}
      </div>
    )
  }
}
export default CompaniesList
