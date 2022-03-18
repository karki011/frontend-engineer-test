// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
const API_URL = "http://localhost:8080/resources";

/** get result of api with url, method, headers, body using javascript fetch function */
function api(url, method, headers = {}, body = null) {
  try {
    return fetch(url, {
      method: method,
      headers: headers,
      body: body,
    }).then(async (response) => {
      const res = await response.json();
      if (response.ok) {
        return res;
      } else {
        const error = {
          message: res.message,
        };
        return Promise.reject(error);
      }
    });
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

/** get result using api with method "GET" in the restful api */
async function apiGet(url) {
  try {
    const res = await api(url, "GET");
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
}

/** get result for resource from backend for data */
async function get() {
  try {
    let res = await apiGet(API_URL);
    return Promise.resolve(res); // return result. .then(res => { })
  } catch (error) {
    return Promise.reject(error); // return error. .catch(res => { })
  }
}

export { get };
