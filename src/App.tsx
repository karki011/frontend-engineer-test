// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import React, { useState, useLayoutEffect, useEffect } from 'react';
import debounce from 'debounce';
import './App.css';
import { ProductTable, Search } from './components'
import { getResources } from './api'
import { ProductApiResponse, ProductData } from './types';

type HashedProductsList = [string, ProductData][]

const filterResourceData = (searchString: string, data: HashedProductsList): ProductData[] => {
  return data
    .reduce((accum, [hash, product]) => {
      const isMatch = hash.includes(searchString.toLowerCase())
      if (isMatch) accum.push(product)
      return accum
    }, [])
}

const useSearchState = () => {
  const [searchString, setSearchString] = useState<string>('')
  return [searchString, debounce(setSearchString, 30)]
}

const updateCssVariable = (columnCount) => {
  const root: HTMLElement = document.querySelector(':root')
  root.style.setProperty('--number-of-columns', columnCount)
}

function App() {
  const [rawProducts, setProducts] = useState<ProductApiResponse>({
    columns: [],
    data: [],
  })

  // this hashing is probably overkill but was fun to put in to make
  // the ui feel really fast. In a real situation, I would think if this was
  // too much.
  const [hashedProducts, setHashedProducts] = useState<HashedProductsList>([])
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>([])
  const [searchString, setSearchString] = useSearchState()

  // this feels messy, I would normally clean this up.
  useLayoutEffect(() => {
    if (!rawProducts.columns.length) {
      getResources()
        .then((response) => {
          setProducts(response)
        })
    }
  })

  useLayoutEffect(() => {
    updateCssVariable(rawProducts.columns.length)
  }, [rawProducts.columns.length])

  // clear how hooks are scaling well from a maintenance perspective with intermediate
  // data structures, perhaps some other state solution or refactoring this state would be best.
  useEffect(() => {
    setHashedProducts(rawProducts.data.map(p => [JSON.stringify(p).toLowerCase(), p]))
  }, [rawProducts.data])

  useEffect(() => {
    setFilteredProducts(filterResourceData(searchString, hashedProducts))
  }, [hashedProducts, searchString])

  return (
    <div className="app">
      <header>
        <h1 className="title is-1">CloudZero Resource Advisor</h1>
      </header>
      <main>
        <Search onChange={setSearchString} />
        <ProductTable
          rows={filteredProducts}
          cols={rawProducts.columns}
        />
      </main>
    </div>
  );
}

export default App;
