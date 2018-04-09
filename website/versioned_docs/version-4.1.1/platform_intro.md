---
id: version-4.1.1-platform_intro
title: GoodData Platform Introduction
sidebar_label: Platform Introduction
copyright: (C) 2007-2018 GoodData Corporation
original_id: platform_intro
---

Before you start building your application using the GoodData UI SDK, complete the following tasks:

## Familiarize yourself with the main terms used in the GoodData UI SDK

* **visualization** is a view into a specific part of your data defined by AFM, resultSpec and a configuration object, usually in a form of a table or graph.
* **AFM**
  **\(Attribute - Filter - Measure\)** is unified input for creating a visualization using the GoodData UI SDK. AFM describes what data you want to execute: what to measure by _measure_ - how to slice by _attribute_ - how to filter out by _filter_.
* **attribute** is a descriptor used to break apart measures and provide context to report data. Attributes dictate how measures are calculated and represented.
* **filter** is a set of characteristics applied to a visualization or measure to remove values from computed and displayed values.
* **measure** is aggregation of facts or counts of distinct attribute values, which are represented as numbers in reports. Measures represent what is being measured in a report; for example, sum of sales or average salary.
* **resultSpec** is an object that defines the structure of result data. For example, you can define a custom title and format for each measure, or sorting of data.

For more details on the terminology, see [Glossary](glossary.md).

## Get your project ID

You will need your project ID for the most components to work.

To get your project ID, see [Find the Project ID](https://help.gooddata.com/display/doc/Find+the+Project+ID).

Examples in this documentation use data from the GoodSales demo project with an ID of `la84vcyhrq8jwbu4wpipw66q2sqeb923`.

## Get resource identifiers

To display visualizations, filters, and other resources, get their identifiers either via the gray pages \(see [Accessing Gray Pages for a Project](https://help.gooddata.com/display/developer/Accessing+Gray+Pages+for+a+Project)\) or using [gdc-catalog-export](gdc-catalog-export.md).