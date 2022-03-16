// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import axios from 'axios'
import { ProductApiResponse } from '../types'

const API_URL = 'http://localhost:8080/resources'

const getResources = () => new Promise<ProductApiResponse>((res, rej) => {
  axios
    .get(API_URL)
    .then((response) => res(response.data))
    .catch(rej)
})

export { getResources }
