import React, { Component } from 'react'
import Component1 from './Component1'

export default class Styleguide extends Component {
  render() {
    return (
      <>
        <h1>React-Spring Components</h1>
        <br />
        <Component1 />
        <br />
        <h1 class='tw-text-imagineText'>Imagine Foundation Style Guide</h1>
        <br />
        <h1>h1: Imagine Foundation</h1>
        <br />
        <h2>h2: Imagine Foundation</h2>
        <br />
        <h3>h3: Imagine Foundation</h3>
        <br />
        <h4>h4: Imagine Foundation</h4>
        <br />
        <p>p: Imagine Foundation</p>
        <br />
        <p class='tw-text-sm'>text-sm</p>
        <br />
        <p class='tw-text-xs'>text-xs</p>
        <br />
        <div className='tw-font-tagline tw-text-6xl tw-font-bold '>
          Diversity = Opportunity
        </div>
        <br />
        <button className='tw-h-10 tw-px-5 tw-text-indigo-700 tw-transition-colors tw-duration-150 tw-border tw-border-indigo-500 tw-rounded-lg focus:tw-shadow-outline hover:tw-bg-indigo-500 hover:tw-text-indigo-100'>
          Outline
        </button>
        <br />
        <br />
        <button className='tw-h-10 tw-px-5 tw-text-indigo-100 tw-transition-colors tw-duration-150 tw-bg-indigo-700 tw-rounded-full focus:tw-shadow-outline hover:tw-bg-indigo-800'>
          Pill button
        </button>
        <br />
        <br />
        <div
          className='tw-max-w-md tw-px-4 tw-py-3 tw-leading-normal tw-text-blue-700 tw-bg-blue-100 tw-rounded-lg'
          role='alert'
        >
          <p>A simple alert with text</p>
        </div>
        <br />
        <label className='tw-text-gray-700'>
          <input type='checkbox' value='' />
          <span className='tw-ml-1'>Lorem ipsum dolor sit</span>
        </label>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Grids</h1>
        <div className='tw-bg-blue-400 tw-min-h-screen tw-flex tw-items-center tw-justify-items-center'>
          <h2>Grid 1</h2>
          <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4'>
            <div className='tw-bg-white tw-p-3 tw-rounded'>1</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>2</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>3</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>4</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>5</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>6</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>7</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>8</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>9</div>
          </div>
          <h2>Grid2</h2>
          <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4'>
            <div className='tw-col-span-2 tw-bg-white tw-p-3 tw-rounded'>1</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>2</div>
            <div className='tw-row-span-3 tw-bg-white tw-p-3 tw-rounded'>3</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>4</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>5</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>6</div>
            <div className='tw-col-span-2 tw-bg-white tw-p-3 tw-rounded'>7</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>8</div>
            <div className='tw-bg-white tw-p-3 tw-rounded'>9</div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <h1>Responsive ( check diff. screen size )</h1>
        <div className='tw-min-h-screen tw-bg-yellow-300 tw-p-10'>
          <div className='tw-space-y-10 md:tw-space-y-0 md:tw-grid md:tw-grid-cols-2'>
            {/* left */}
            <div className='md:tw-flex md:tw-flex-col md:tw-justify-center'>
              <h2 className='tw-text-black tw-text-2xl md:tw-text-4xl lg:tw-text-6xl tw-font-bold tw-mb-4'>
                Whoa Responsive
              </h2>
              <p className='md:tw-text-lg tw-text-gray-900'>
                Responsive can be done using Tailwind!
              </p>
            </div>
            {/* right */}
            <div className=''>
              <div className='tw-w-full tw-h-64 tw-rounded-lg tw-shadow-2xl tw-bg-black'>
                hi
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
