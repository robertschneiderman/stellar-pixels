import {connect} from 'react-redux';
import SearchBar from './search_bar';
import * as ACTIONS from '../../actions/search_actions';

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestSearchItems: (query, page) => dispatch(ACTIONS.requestSearchItems(query, page))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
