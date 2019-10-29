import React from 'react';
import DebtItemOverviewContainer from '../containers/DebtItemOverviewContainer';
import DebtItemDetailsContainer from '../containers/DebtItemDetailsContainer';

type Debt = {
  Id?: number;
  Name?: string;
  NIP?: string;
  Value?: number;
  Address?: string;
  DocumentType?: string;
  Price?: number;
  Number?: string;
  activedDebt?: number | null;
};

const DebtItem: React.FC<Debt> = props => {
  const { Id, activedDebt } = props;

  return activedDebt === Id ? (
    <DebtItemDetailsContainer {...props} />
  ) : (
    <DebtItemOverviewContainer {...props} />
  );
};

export default DebtItem;
