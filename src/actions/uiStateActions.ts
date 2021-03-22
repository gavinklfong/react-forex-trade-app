import { createAction } from "@reduxjs/toolkit";
import { UI_STATE_ACTION_TYPE } from "./actionTypes";

export const dismissToast = createAction(
  UI_STATE_ACTION_TYPE.DISMSS_TOAST,
  () => ({ payload: "" })
);
