import {
  combineReducers,
} from "@reduxjs/toolkit";

import {
  reducer as calculatorReducer,
} from "./calculator";
import {
  reducer as userReducer,
} from "./user";
import {
  reducer as pageReducer,
} from "./page";
import {
  StoreNameSpace,
} from "../../const";

export const rootReducer = combineReducers({
  [StoreNameSpace.CALCULATOR]: calculatorReducer,
  [StoreNameSpace.USER]: userReducer,
  [StoreNameSpace.PAGE]: pageReducer,
});
