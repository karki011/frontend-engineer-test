// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import { useEffect, useState } from "react";
import "./App.css";
import { ProductTable, Search } from "./components";
import { get as getResource } from "./api/index";
import { ProductApiResponse } from "./types";
import { useSetting } from "./provide/setting";

const _includes = (str, filter) => {
  return str.toLowerCase().includes(filter.toLowerCase());
};
function App() {
  const { settingState } = useSetting();
  const [resource, setResource] = useState<ProductApiResponse>({
    columns: [],
    data: [],
  });
  const [products, setProducts] = useState<ProductApiResponse>({
    columns: [],
    data: [],
  });

  useEffect(() => {
    getResource().then((res) => {
      setResource(res);
      setProducts(res);
    });
  }, []);
  useEffect(() => {
    console.log(settingState.search);
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
      setProducts({ ...products, data: res });
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
