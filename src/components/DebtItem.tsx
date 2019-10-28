import React from 'react';
import '../less/components/DebtItem.less';

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
  const { Name, Value, NIP} = props;
  return (<tr>
    <td>{Name}</td>
    <td>{NIP}</td>
    <td>{Value}</td>
    <td>
      <button className="c-debt-item__button">Więcej</button>
    </td>
  </tr>);
};

export default DebtItem;
