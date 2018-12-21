# How to create and use predicates

Predicates represent a way for a developer to create matching for elements (e.g. measure header item, attribute header item) with arbitrary complexity.

Simple match on equality can look like

```javascript
(headerItem) => headerItem.measureHeaderItem.localIdentifier === 'm1_localIdentifier'
```

Following predicate increments `callCounter` variable in predicate's clojure every time it is being called and returns true when counter is even number.

```javascript
let callCounter = 0;

const predicate = () => (callCounter++ % 2) === 0
```

Predicates in GoodData SDK are called with two parameters.
First one is execution header with type defined [here]
(https://github.com/gooddata/gooddata-react-components/blob/master/src/interfaces/MappingHeader.ts#L4).

Second parameter is context, which is object containing `afm` and `executionResponse` keys, which can be used
for more complex predicate matching, its type defined [here](https://github.com/gooddata/gooddata-react-components/blob/master/src/interfaces/HeaderPredicate.ts#L6)

Simple predicate for matching color based on measure's localIdentifier
(in this example it is variable `id` living in function's clojure) may look as follows.

```javascript
(header, _context): boolean => {
    if (header.measureHeaderItem !== undefined) {
        const headerLocalIdentifier = header.measureHeaderItem.localIdentifier;
        return headerLocalIdentifier ? headerLocalIdentifier === id : false;
    }
};
```

For more advanced predicates see predicate factories in [HeaderPredicateFactory]
(https://github.com/gooddata/gooddata-react-components/blob/master/src/factory/HeaderPredicateFactory.ts).
