// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import React from 'react';
import './App.css';
import sampleData from './sample-data.json'
import { ProductTable, Search } from './components'

function App() {
  return (
    <div className="app">
      <header>
        <h1>CloudZero Resource Advisor</h1>
      </header>
      <main>
        <Search />
        <ProductTable
          rows={sampleData.data}
          cols={sampleData.columns}
        />
      </main>
    </div>
  );
}

export default App;
