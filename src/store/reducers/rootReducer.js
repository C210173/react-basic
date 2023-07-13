const initState = {
  users: [
    { id: 1, name: "hao" },
    { id: 2, name: "chau" },
    { id: 2, name: "hehe" },
  ],
};
const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
