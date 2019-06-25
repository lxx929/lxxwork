const list = (state = [], action) => {
  console.log(state, action);
  let list = state;
  switch (action.type) {
    case "ADD_Msg":
      list.push(action.val);
      break;
    case "DEL_Msg":
      list.splice(action.index, 1);
      break;

    default:
      break;
  }
  return list;
};

export default list;
