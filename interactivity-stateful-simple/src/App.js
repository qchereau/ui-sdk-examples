import React from 'react'

import './App.css';
import SimpleSwitcherDemo from './SimpleSwitcherDemo'
import BetterSwitcherDemo from './BetterSwitcherDemo'

const App = () => (
  <div className="App">
    <h2>Simple metric switcher</h2>
    <p>
      The following component demonstrates the most simplistic 
      metric switcher using a stateful React component.
    </p>
    <SimpleSwitcherDemo />

    <h2>Better metric switcher</h2>
    <p>
      The following component shows the metric name next to the
      computed value. Since the computed value is retrieved from
      GoodData API with a small delay, we use the
      <tt>onLoadingChanged</tt> method to display a loading 
      indicator and to ensure the metric name is changed after the
      proper value is loaded.
    </p>
    <BetterSwitcherDemo />
  </div>
)

export default App