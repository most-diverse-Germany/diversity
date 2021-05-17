import React, { useState } from 'react'

const SearchBar = (props) => {

  const [input, setInput] = useState('');
  const BarStyling = {width:"20rem",background:"#F2F1F9", padding:"0.5rem"};


  const updateInput = (input) => {
    const filtered = props.companies.filter(company => {
     return company.company_name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(filtered);
    // setCompanies(filtered);
  }
  
  
  return ( 
    <input 
     style={BarStyling}
     key="random1"
     value={input}
     placeholder={"search company"}
     onChange={updateInput}
    />
  )
}

export default SearchBar
