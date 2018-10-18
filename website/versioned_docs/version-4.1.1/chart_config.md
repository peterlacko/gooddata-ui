---
title: Chart Config
sidebar_label: Chart Config
copyright: (C) 2007-2018 GoodData Corporation
id: version-4.1.1-chart_config
original_id: chart_config
---
## Structure

```javascript
{
    colors?: String[];
    legend?: {
        enabled?: boolean;
        position?: 'top' | 'left' | 'right' | 'bottom';
    };
}
```

## Example of a Color Array

```javascript
['rgb(195, 49, 73)', 'rgb(168, 194, 86)']

```

If there are fewer colors than data points, then the colors are repeated. For example, for the two colors and three data points, here is how colors will be used:

```javascript
['rgb(195, 49, 73)', 'rgb(168, 194, 86)', 'rgb(195, 49, 73)']
```
