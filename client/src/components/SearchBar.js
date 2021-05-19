import React from 'react'

const SearchBar = (props) => {
  
  // const BarStyling = {width:"20rem",background:"#F2F1F9", padding:"0.5rem", margin: '1rem'};

  const updateInput = (e) => {
    props.setSearchTerm(e.target.value);
  }
  
  return (

    /////// SEARCH OPTION
    <div className="tw-pt-4 tw-mx-auto tw-text-imagineText">
      <input className="tw-w-2/3 tw-border-2 tw-border-gray-300 tw-bg-white tw-h-10 tw-px-5 tw-pr-16 tw-rounded-lg tw-text-sm tw-focus:outline-imagineBlue-rounded-lg"
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