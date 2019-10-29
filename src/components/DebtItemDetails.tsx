import React from 'react';
import '../less/components/DebtItem.less';

type Debt = {
  Id?: number;
  Name?: string;
  NIP?: string;
  Value?: number;
  Address?: string;
  DocumentType?: string;
  Price?: number;
  Number?: string;
  activateDebt: (
    id?: number | null,
  ) => {
    type: string;
    payload: {
      debt: number | null;
    };
  };
};

const DebtItemDetails: React.FC<Debt> = props => {
  const { Name, Value, NIP, activateDebt } = props;

  return (
    <tr>
      <td>{Name}</td>
      <td>{NIP}</td>
      <td>{Value}</td>
      <td>
        <button onClick={() => activateDebt(null)} className="c-debt-item__button">
          Mniej
        </button>
      </td>
    </tr>
  );
};

export default DebtItemDetails;
