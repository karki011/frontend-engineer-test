// Copyright (c) 2016-present, CloudZero, Inc. All rights reserved.
// Licensed under the BSD-style license. See LICENSE file in the project root for full license information.
import { FunctionComponent, useState } from "react";
import "./search.css";
import { useSetting } from "../../provide/setting";

const Search: FunctionComponent = () => {
  const { dispatch } = useSetting();
  const [text, setText] = useState<string>(""); // the search text value

  // call when the search text is changed
  const handleChangeText = (e) => {
    setText(e.target.value);
    dispatch({
      type: "SET",
      settingName: "search",
      settingData: e.target.value,
    }); // set global search text using useContext.
  };

  return (
    <div className="search">
      <p>Search: </p>
      <input type="text" value={text} onChange={handleChangeText} />
    </div>
  );
};

export default Search;
