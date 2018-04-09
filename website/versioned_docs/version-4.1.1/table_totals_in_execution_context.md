---
title: Table Totals in ExecutionObject
sidebar_label: Table Totals in ExecutionObject
copyright: (C) 2007-2018 GoodData Corporation
id: version-4.1.1-table_totals_in_execution_object
original_id: table_totals_in_execution_object
---

There are several typical examples how to define table totals, how they looks like on the UI and what has to be defined in ExecutionObject \([AFM](afm.md#native-total) and [ResultSpec](result_specification.md#totals)\) to achieve expected results.

## Currently Supported Types

| Type | In 1st dimension | In 2nd dimension |
| :--- | :--- | :--- |
| Grand totals | DONE | NOT YET |
| Sub-totals | NOT YET | NOT YET |

## Grand Totals

Grand totals are totals computed for a measure in a whole column or row.

### In 1st dimension

![Grand Totals for Coluns](assets/GrandTotalsForColumns.png)

* **a1**, **a2** are attributes.
* **m1** is a measure.

### Example: ExecutionObject for Grand Totals in 1st dimension

```javascript
execution : {
    afm: {
        ...
        nativeTotals: [
            {
                measureIdentifier: 'm1',
                attributeIdentifiers: []
            }
        ]
    },
    resultSpec: {
        ...
        dimensions: [
            {
                itemIdentifiers: ['a1', 'a2'],
                totals: [
                    {
                        measureIdentifier: 'm1',
                        type: 'sum',
                        attributeIdentifier: 'a1'
                    },
                    {
                        measureIdentifier: 'm1',
                        type: 'nat',
                        attributeIdentifier: 'a1'
                    }
                ]
            },
            {
                itemIdentifiers: ['measureGroup'],
                totals: []
            }
        ]
    }
}
```
