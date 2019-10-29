import React from 'react';
import '../less/components/DebtItem.less';

type Debt = {
  Id?: number;
  Name?: string;
  NIP?: string;
  Value?: number;
  activateDebt: (
    id?: number | null,
  ) => {
    type: string;
    payload: {
      debt: number | null;
    };
  };
  activedDebt: number | null;
};

const DebtItemOverview: React.FC<Debt> = props => {
  const { Id, Name, Value, NIP, activateDebt } = props;

  return (
    <tr>
      <td>{Name}</td>
      <td>{NIP}</td>
      <td>{Value}</td>
      <td>
        <button onClick={() => activateDebt(Id)} className="c-debt-item__button">
          Więcej
        </button>
      </td>
    </tr>
  );
};

export default DebtItemOverview;
