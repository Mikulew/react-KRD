import { connect } from 'react-redux';
import DebtItem from '../components/DebtItem';

interface State {
  activedDebt: number | null;
}

const mapStateToProps = (state: State) => {
  return {
    activedDebt: state.activedDebt,
  };
};

export default connect(
  mapStateToProps,
  null,
)(DebtItem);
