import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import Commerce from '@chec/commerce.js';

const commerce = new Commerce('{pk_test_3033382688e0c0b1b5e2fe0da35ff30084413d5740dda}');

ReactDOM.render(<App />, document.getElementById("root"));
