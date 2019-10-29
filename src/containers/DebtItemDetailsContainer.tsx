import { connect } from 'react-redux';
import DebtItemDetails from '../components/DebtItemDetails';
import { activateDebt } from '../duck/actions';

interface State {
  activedDebt: {}
};

const mapStateToProps = (state: State) => {
  return {
    activedDebt: state.activedDebt,
  };
};

const mapDispatchToProps = { activateDebt };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DebtItemDetails);