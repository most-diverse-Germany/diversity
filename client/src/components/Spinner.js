import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Spinner.css'

const Spinner = (props) => {
  return (
    <div className="spinner">
      <Loader
        type="Puff"
        color={props.color}
        height={100}
        width={100}
        timeout={6000}
        />
    </div>
  )
}

export default Spinner
