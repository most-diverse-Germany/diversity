import React from 'react'
const SearchBar = (props) => {
  // const BarStyling = {width:"20rem",background:"#F2F1F9", padding:"0.5rem", margin: '1rem'};
  const updateInput = (e) => {
    props.setSearchTerm(e.target.value)
  }
  const searchbarStyle = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  }
  const inputStyle = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    border: '2px solid',
    borderColor: props.color,
    width: '100%',
    borderRadius: '0px',
    boxShadow: '5px 5px',
  }
  return (
    <div style={searchbarStyle} className='tw-p-4'>
      <input
        style={inputStyle}
        className='tw-w-auto tw-h-10 tw-px-5 tw-pr-16 tw-text-sm tw-focus:outline-imagineRed'
        key='random1'
        value={props.searchTerm}
        placeholder={'search company'}
        onChange={updateInput}
      />
    </div>
  )
}
export default SearchBar
