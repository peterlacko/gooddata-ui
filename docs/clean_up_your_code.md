---
title: Clean Up Your Code
sidebar_label: Clean Up Your Code
copyright: (C) 2007-2018 GoodData Corporation
id: clean_up_your_code
---

GoodData.UI provides a tool named [gdc-catalog-export](gdc-catalog-export.md) that can help you keep the list of object identifiers organized in a Javascript file within your application.

**Example:**
In the tutorial [Create Your First Application](ht_create_your_first_visualization.html), you used the following component:

```javascript
const measures = [
    {
        measure: {
            localIdentifier: 'franchiseFeesIdentifier',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: 'aaEGaXAEgB7U'
                    }
                }
            },
            format: '#,##0'
        }
    }
];

<div style={{ height: 300 }}>
  <LineChart
      projectId='xms7ga4tf3g3nzucd8380o2bev8oeknp'
      measures={measures}
      trendBy={attribute}
      config={{
          colors: ['#14b2e2']
      }}
  />
</div>
```

In this component, `projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"` is a hardcoded reference to the project ID, and the measure identifier is a hardcoded reference to a measure.

With the [gdc-catalog-export](gdc-catalog-export.md) tool, you can save the list of all measures, attributes and other relevant objects to a JSON file.

To install the tool, run the following command from the command line:
```bash
yarn global add gdc-catalog-export
```

After you installed the tool, do the following:
1. Ensure that you are in the root folder of your app, run the following command, and fill in the interactive prompts:
    ```bash
    $ gdc-catalog-export --output src/catalog.json
    ```

    > When working with the [live examples](https://gooddata-examples.herokuapp.com/), add `--hostname https://developer.na.gooddata.com`.

    The `src/catalog.json` file becomes a JSON file in your application.
    ```javascript
    {
      ...
      "$ Franchise Fees": {
        "identifier": "aaEGaXAEgB7U",
        "tags": "franchise_fees",
        "title": "$ Franchise Fees"
      },
      ...
    }
    ```
2. Import the `catalog.json` file into your `App.js` file.
   You can now reference the measure using its human-readable alias \(`$ Franchise Fees`\) instead of its identifier \(`aaEGaXAEgB7U`\). Your new `App.js` file would look like the following:
    ```javascript
    import React, { Component } from 'react';
    import { LineChart } from '@gooddata/react-components';
    import '@gooddata/react-components/styles/css/main.css';

    import logo from './logo.svg';
    import './App.css';

    import { CatalogHelper } from '@gooddata/react-components';
    import catalogJson from './catalog.json';
    const C = new CatalogHelper(catalogJson);

    const measures = [
    {
        measure: {
            localIdentifier: 'franchiseFeesIdentifier',
            definition: {
                measureDefinition: {
                    item: {
                        identifier: C.measure('$ Franchise Fees')
                    }
                }
            },
            format: '#,##0'
        }
      }
    ];

    const attribute = {
        visualizationAttribute: {
            displayForm: {
                identifier: 'date.abm81lMifn6q'
            },
            localIdentifier: 'month'
        }
    };

    class App extends Component {
       render() {
          return (
             <div className="App">
                <div className="App-header">
                   <img src={logo} className="App-logo" alt="logo" />
                   <h2>Welcome to React</h2>
                </div>
                <div style={{ height: 300 }}>
                  <LineChart
                      projectId='xms7ga4tf3g3nzucd8380o2bev8oeknp'
                      measures={measures}
                      trendBy={attribute}
                      config={{
                          colors: ['#14b2e2']
                      }}
                  />
                </div>
                <p className="App-intro">
                   To get started, edit <code>src/App.js</code> and save to reload.
                </p>
             </div>
          );
       }
    }

    export default App;
    ```

Notice that the code in the `App.js` file still includes the hardcoded reference to the project \(`xms7ga4tf3g3nzucd8380o2bev8oeknp`\). In your real application, you may prefer to pass the project ID via URL or a hash parameter, or it may be retrieved from your server-side APIs \(if you are integrating GoodData into an existing application\). It depends on your application's architecture.
