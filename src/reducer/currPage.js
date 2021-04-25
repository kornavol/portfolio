const currPage = (
  state = {
    upper: "",
    below: "",
  },
  action
) => {
  switch (action.type) {
    case "BELOW-PAGE":
      state.upper = action.upperPage;
      state.below = action.belowPage;
      console.log("state: ", state);
      return state;
    case "GO_TO_BELOW_PAGE":
      window.location.replace("/" + state.below);
      return state;
    case "GO_TO_UPPER_PAGE":
      window.location.replace("/" + state.upper);
      return state;
    default:
      return state;
  }
};

export default currPage;
