import React from 'react'
import { LinkedinShareButton, WhatsappShareButton, TwitterShareButton} from 'react-share';
import { LinkedinIcon, WhatsappIcon, TwitterIcon } from 'react-share';

export default function ShareIcon(props){
  return (
  
    <div className='tw-flex tw-justify-center'>
      <div className='tw-mx-4'>
            <LinkedinShareButton
              url = {
              `https://most-diverse-100.herokuapp.com/companies/${props.company._id}`
              } 
               title = { `${props.company.company_name} is part of the most diverse 100 companies ranking of imagine foundation`}
              >
              <LinkedinIcon size={35} round={true} />
              </LinkedinShareButton>
              </div>

              <div className='tw-mx-4'>
              <WhatsappShareButton
              url = {       
                `https://most-diverse-100.herokuapp.com/companies/${props.company._id}`
              } 
               title = { `${props.company.company_name} is part of the most diverse 100 companies ranking of imagine foundation`}
              >
              <WhatsappIcon size={35} round={true} />
              </WhatsappShareButton>
              </div>
              
              <div className='tw-mx-4'>
              <TwitterShareButton
              url = {
                `https://most-diverse-100.herokuapp.com/companies/${props.company._id}`
              } 
               title = {`${props.company.company_name} is part of the most diverse 100 companies ranking of imagine foundation`}
              >
              <TwitterIcon size={35} round={true} />
              </TwitterShareButton>
              </div>

    </div>
  )
}
