import { connect } from 'react-redux';
import DebtItemOverview from '../components/DebtItemOverview';
import { activateDebt } from '../duck/actions';

interface State {
  activedDebt: number | null;
}

const mapStateToProps = (state: State): State => {
  return {
    activedDebt: state.activedDebt,
  };
};

const mapDispatchToProps = { activateDebt };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DebtItemOverview);
