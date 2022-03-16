// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import React, { FunctionComponent } from 'react'
import "./search.css"

type ParentProps = {
  onChange: (v: string) => void
}
const Search: FunctionComponent<ParentProps> = (props) => {
  const { onChange } = props
  return (
    <div className="search">
      <input placeholder="Search for resources here" onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default Search
