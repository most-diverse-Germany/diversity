import React from 'react'

const SearchBar = (props) => {
  
  // const BarStyling = {width:"20rem",background:"#F2F1F9", padding:"0.5rem", margin: '1rem'};

  const updateInput = (e) => {
    props.setSearchTerm(e.target.value);
  }

  const searchbarStyle = {
    backgroundColor: props.backgroundColor,
    // marginBottom: '0'
  }

  const inputStyle = {
    backgroundColor: props.backgroundColor,
    color: props.color,
    border: '2px solid',
    borderColor: props.color,
    width: '100%'
  }
  
  return (

    /////// SEARCH OPTION
    <div style={searchbarStyle} className="tw-p-4 tw-text-imagineText">
      <input style={inputStyle} className="tw-w-auto tw-h-10 tw-px-5 tw-pr-16 tw-text-sm tw-focus:outline-imagineRed"
      // style={BarStyling}
      key="random1"
      value={props.searchTerm}
      placeholder={"search company"}
      onChange={updateInput}
      />
    </div>

    /////// SUBMIT OPTION
    // <form onSubmit={handleSubmit}>
    //     <label htmlFor="title">Search: </label>
    //     <input
    //       type="text"
    //       value={props.searchTerm}
    //       onChange={updateInput}
    //     />
    //     <button type="submit">Add this movie</button>
    // </form>
  )
}

export default SearchBar