import {connect} from 'react-redux';
import SearchBar from './search_bar';
import * as ACTIONS from '../../actions/search_actions';

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchItems: search => dispatch(ACTIONS.requestSearchItems(search)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
