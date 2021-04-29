// import { useHistory } from "react-router";

const currPage = (
  state = {
    upper: "",
    below: "",
  },  action ) => {
  switch (action.type) {
    case "BELOW-PAGE":
      state.upper = action.upperPage;
      state.below = action.belowPage;
      return state;
    case "GO_TO_BELOW_PAGE":
      // let history = useHistory();
      // history.push("/" + state.below);
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
