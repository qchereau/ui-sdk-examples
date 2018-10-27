import React, { Component } from 'react';
import { Kpi, ColumnChart } from './components/afmConnected';
import C from './catalog';
import config from './config';
import { FG_MAIN } from './constants';
import AttributeDropdown from './components/AttributeDropdown';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
          <AttributeDropdown
            {...config}
            filterGroup={FG_MAIN}
            attribute={C.attributeDisplayForm('Location City')}
            placeholder="Filter cities"
          />
        </div>
        <Kpi
          {...config}
          filterGroup={FG_MAIN}
          measure={C.measure('# Checks')}
        />
        <div style={{ height: 400 }}>
          <ColumnChart
            {...config}
            filterGroup={FG_MAIN}
            afm={{
              measures: [{
                localIdentifier: 'm1',
                definition: {
                  measure: {
                    item: {
                      identifier: C.measure('# Checks')
                    }
                  }
                }
              }],
              attributes: [{
                localIdentifier: 'a1',
                displayForm: {
                  identifier: C.attributeDisplayForm('Location City')
                }
              }]
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
