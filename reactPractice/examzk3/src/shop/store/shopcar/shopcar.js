const sum = arr => {
  console.log(arr, "sum");
  return arr.reduce((prev, cur) => {
    return prev + (cur.checked ? cur.count * cur.price : 0);
  }, 0);
};

const all = arr => {
  return arr.every(item => item.checked);
};

const shopcar = (
  state = { sumPrice: 0, allchecked: false, list: [] },
  action
) => {
  console.log(action);
  switch (action.type) {
    case "ADD_SHOP": { //添加购物车
      let ind = state.list.findIndex(item => item.id == action.obj.id);
      if (ind == -1) {
        action.obj.count = 1;
        action.obj.checked = false;
        state.list.push(action.obj);
      } else {
        state.list[ind].count++;
      }
      return {
        ...state,
        list: [...state.list]
      };
    }
    case "CHANGE_CHECK": { //点击单选
      let { id, flag } = action;
      console.log(id, flag);
      let ind = state.list.findIndex(item => item.id == id);
      state.list[ind].checked = flag;
      // console.log(sum(state.list));
      state.sumPrice = sum(state.list);
      state.allchecked = all(state.list);
      return {
        ...state,
        list: [...state.list]
      };
    }
    case "CHANGE_COUNT": { //点击加减
      let { id, count } = action;
      let ind = state.list.findIndex(item => item.id == id);
      state.list[ind].count = count;
      state.sumPrice = sum(state.list);
      return {
        ...state,
        list: [...state.list]
      };
    }
    case "CHANGE_ALL": { //全选
      let { flag } = action;
      state.allchecked = flag;
      state.list.map(item => {
        item.checked = flag;
      });
      state.sumPrice = sum(state.list);
      return {
        ...state,
        list: [...state.list]
      };
    }

    default:
      return state;
  }
};

export default shopcar;
