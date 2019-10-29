import { connect } from 'react-redux';
import DebtItemOverview from '../components/DebtItemOverview';
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
)(DebtItemOverview);