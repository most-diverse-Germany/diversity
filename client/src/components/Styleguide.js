import React, { Component } from 'react'

export default class Styleguide extends Component {
  render() {
    return (
      <>
        <h1 class='tw-text-imagine'>Imagine Foundation Style Guide</h1>
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
        <div class='tw-font-tagline tw-text-6xl tw-font-bold '>
          Diversity = Opportunity
        </div>
        <br />
        <button class='tw-h-10 tw-px-5 tw-text-indigo-700 tw-transition-colors tw-duration-150 tw-border tw-border-indigo-500 tw-rounded-lg focus:tw-shadow-outline hover:tw-bg-indigo-500 hover:tw-text-indigo-100'>
          Outline
        </button>
        <br />
        <button class='tw-text-blue-700'>test</button>
      </>
    )
  }
}
