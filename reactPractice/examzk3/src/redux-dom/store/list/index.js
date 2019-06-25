const statedefault = [];

const list = (state = statedefault, action) => {
  // console.log(state,'state')
  let list = [...state];
  // JSON.paser(JSON.string(state))
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

window.statedefault = statedefault;
export default list;
