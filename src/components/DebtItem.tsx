import React from 'react';
import DebtItemOverview from './DebtItemOverview';
import DebtItemDetails from './DebtItemDetails';

type Debt = {
  Id?: number,
  Name?: string,
  NIP?: string,
  Value?: number,
  Address?: string,
  DocumentType?: string,
  Price?: number,
  Number?: string,
};

const DebtItem: React.FC<Debt> = props => {
  const isExtended = false;

  return (isExtended ? <DebtItemDetails {...props} /> : <DebtItemOverview {...props} />);
};

export default DebtItem;
