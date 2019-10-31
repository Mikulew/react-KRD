import React from 'react';
import DebtItemOverviewContainer from '../containers/DebtItemOverviewContainer';
import DebtItemDetailsContainer from '../containers/DebtItemDetailsContainer';

interface Props {
  id?: number;
  name?: string;
  nip?: string;
  value?: number;
  address?: string;
  documentType?: string;
  price?: number;
  number?: string;
  activedDebt?: number | null;
}

const DebtItem: React.FC<Props> = props => {
  const { id, name, nip, value, address, documentType, price, number, activedDebt } = props;
  const isActivedDebt = activedDebt === id;

  return isActivedDebt ? (
    <DebtItemDetailsContainer
      id={id}
      name={name}
      nip={nip}
      value={value}
      address={address}
      documentType={documentType}
      price={price}
      number={number}
    />
  ) : (
    <DebtItemOverviewContainer id={id} name={name} nip={nip} value={value} />
  );
};

export default DebtItem;
