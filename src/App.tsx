// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import { useEffect, useState } from "react";
import "./App.css";
import { ProductTable, Search } from "./components";
import { get as getResource } from "./api/index"; // side effect to get data from backend
import { ProductApiResponse } from "./types";
import { useSetting } from "./provide/setting";

/**
 *  check if the string contrains filter string after lowercase.
 * */
const _includes = (str, filter) => {
  return str.toLowerCase().includes(filter.toLowerCase());
};
function App() {
  const { settingState } = useSetting();
  const [resource, setResource] = useState<ProductApiResponse>({
    columns: [],
    data: [],
  }); // all data from backend
  const [products, setProducts] = useState<ProductApiResponse>({
    columns: [],
    data: [],
  }); // data in the product table

  // initial to get all data from backend
  useEffect(() => {
    getResource().then((res) => {
      setResource(res);
      setProducts(res);
    });
  }, []);
  // call when the search text is changed
  useEffect(() => {
    // if search text is not empty, filter the resource using search text to get product data.
    if (settingState.search && settingState.search !== "") {
      const res = resource.data.filter((item) => {
        let filter = false;
        if (_includes(item?.product_name, settingState.search)) filter = true;
        if (_includes(item?.service_type, settingState.search)) filter = true;
        if (_includes(item?.resource_type, settingState.search)) filter = true;
        if (_includes(item?.purpose, settingState.search)) filter = true;
        if (
          _includes(
            item?.service_attributes?.physicalProcessor?.display_value,
            settingState.search
          )
        )
          filter = true;
        if (
          _includes(
            item?.service_attributes?.networkPerformance?.display_value,
            settingState.search
          )
        )
          filter = true;
        if (
          _includes(
            item?.service_attributes?.dedicatedEbsThroughput?.display_value,
            settingState.search
          )
        )
          filter = true;
        if (
          _includes(
            item?.service_attributes?.vcpu?.display_value,
            settingState.search
          )
        )
          filter = true;
        if (
          _includes(
            item?.service_attributes?.memory?.display_value,
            settingState.search
          )
        )
          filter = true;
        return filter;
      });
      setProducts({ ...products, data: res }); // update product.data using the result of filtering
    }
  }, [settingState.search]);
  return (
    <div className="app">
      <header>
        <h1 className="title is-1"> Resource Advisor</h1>
      </header>
      <main>
        <Search />
        <ProductTable rows={products.data} cols={products.columns} />
      </main>
    </div>
  );
}

export default App;
