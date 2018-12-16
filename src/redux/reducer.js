const simpleAjax = (state = [], action) => {
  if (action.type == 'AJAX') {
    return action.payload;
  }
  return state;
};

export default simpleAjax;
