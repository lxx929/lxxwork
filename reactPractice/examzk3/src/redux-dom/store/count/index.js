const count = (state = 30, action) => {
  console.log(state, action);
  let count = state;
  switch (action.type) {
    case "ADD":
      count++;
      break;
    case "DEL":
      count--;
      break;
    default:
      break;
  }
  return count;
};

export default count;
