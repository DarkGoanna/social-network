import { connect } from "react-redux";
import { setPeopleAC, setTotalCountAC, toggleActivePageAC } from "../../../store/redusers/people-reduser";
import People from "./People";

function mapStateToProps(state) {
  return {
    people: state.peopleList.people,
    totalCount: state.peopleList.totalCount,
    countOnPage: state.peopleList.countOnPage,
    active: state.peopleList.active,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setPeople: (people) => {
      const action = setPeopleAC(people)
      dispatch(action);
    },
    setTotalCount: (count) => {
      const action = setTotalCountAC(count);
      dispatch(action);
    },
    toggleActivePage: (pageNumber) => {
      const action = toggleActivePageAC(pageNumber);
      dispatch(action);
    }
  }
}

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);
export default PeopleContainer;