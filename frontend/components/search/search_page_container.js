import {connect} from 'react-redux';
import SearchPage from './search_page';

const mapStateToProps = state => ({
  onEnter: state.onEnter
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: () => dispatch(loadPage()),
    requestSearchItems: items => dispatch(requestSearchItems(items)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
