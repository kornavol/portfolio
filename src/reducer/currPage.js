// import { useHistory } from "react-router-dom";
// import { history } from '../index';
// import scrollRouting from '../components/scrollRouting';


const currPage = (
  state = {
    upper: "",
    below: "",
  },  action,) => {
  switch (action.type) {
    case "BELOW-PAGE":
      state.upper = action.upperPage;
      state.below = action.belowPage;
      // state. history = action.history;
      // console.log(history);
      // console.log(state.upper);
      return state;
    case "GO_TO_BELOW_PAGE":
      // let history = state.history;
      // history.push("/" + state.below);
      // history.push("/contact");
      // scrollRouting(state.below);
      // console.log(history);
      // console.log(state.upper);
      // window.location.replace("/" + state.below);
      return state;
    case "GO_TO_UPPER_PAGE":
      // window.location.replace("/" + state.upper);
      return state;
    default:
      return state;
  }
};

export default currPage;
