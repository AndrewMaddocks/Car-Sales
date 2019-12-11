export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = item => {
  return { type: REMOVE_FEATURE, payload: item };
};

export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const updateTotal = item => {
  return { type: UPDATE_TOTAL, payload: item };
};
export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = item => {
  return { type: ADD_FEATURE, payload: item };
};
export const UPDATE_NEW_TOTAL = "UPDATE_NEW_TOTAL";
export const updateNewTotal = item => {
  return { type: UPDATE_NEW_TOTAL, payload: item };
};
