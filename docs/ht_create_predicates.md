---
title: Create Predicates
sidebar_label: Create Predicates
copyright: (C) 2007-2019 GoodData Corporation
id: ht_create_predicates
---

Predicates allow you to create a match between elements (for example, a measure header item or an attribute header item) with an arbitrary level of complexity.

For example, a predicate that creates a simple match based on equality may look like the following:

```javascript
(headerItem) => headerItem.measureHeaderItem.localIdentifier === 'm1_localIdentifier'
```

Here is an example of a predicate that increments the `callCounter` variable in the predicate's closure every time the variable is called and its counter is set to an even number:

```javascript
let callCounter = 0;

const predicate = () => (callCounter++ % 2) === 0
```

A predicate can be called with the following parameters:
* **Execution header** with the type as defined [here](https://github.com/gooddata/gooddata-react-components/blob/master/src/interfaces/MappingHeader.ts#L4)

* **Context** with the type defined [here](https://github.com/gooddata/gooddata-react-components/blob/master/src/interfaces/HeaderPredicate.ts#L6)
    
    Context is an object that contains the `afm` and `executionResponse` keys. These keys can be used for building complex matching conditions.

For example, this following predicate matches a color based on a measure's localIdentifier:

```javascript
(header, _context): boolean => {
    if (header.measureHeaderItem !== undefined) {
        const headerLocalIdentifier = header.measureHeaderItem.localIdentifier;
        return headerLocalIdentifier === 'measureId';
    }
};
```

For more advanced predicates, see the predicate factories in
[HeaderPredicateFactory](https://github.com/gooddata/gooddata-react-components/blob/master/src/factory/HeaderPredicateFactory.ts).