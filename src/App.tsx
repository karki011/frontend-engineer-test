// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import React, { useState, useLayoutEffect } from 'react';
import './App.css';
import sampleData from './sample-data.json'
import { ProductTable, Search } from './components'
import { getResources } from './api'
import { ProductApiResponse } from './types';

function App() {
  const [products, setProducts] = useState<ProductApiResponse>({
    columns: [],
    data: [],
  })

  // this feels messy, I would normally clean this up.
  useLayoutEffect(() => {
    if (!products.columns.length) {
      getResources()
        .then((response) => {
          setProducts(response)
        })
    }
  })

  console.log('products', products)
  return (
    <div className="app">
      <header>
        <h1 className="title is-1">CloudZero Resource Advisor</h1>
      </header>
      <main>
        <Search />
        <ProductTable
          rows={products.data}
          cols={products.columns}
        />
      </main>
    </div>
  );
}

export default App;
