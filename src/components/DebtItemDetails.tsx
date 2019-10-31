import React from 'react';
import '../less/components/DebtItem.less';

interface Props {
  id?: number;
  name?: string;
  nip?: string;
  value?: number;
  address?: string;
  documentType?: string;
  price?: number;
  number?: string;
  activateDebt: (
    id?: number | null,
  ) => {
    type: string;
    payload: {
      debt: number | null;
    };
  };
}

const DebtItemDetails: React.FC<Props> = props => {
  const { name, value, nip, activateDebt } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{nip}</td>
      <td>{value}</td>
      <td>
        <button type="button" onClick={() => activateDebt(null)} className="c-debt-item__button">
          Mniej
        </button>
      </td>
    </tr>
  );
};

export default DebtItemDetails;
