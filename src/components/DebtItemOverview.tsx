import React from 'react';
import '../less/components/DebtItem.less';

type Debt = {
  Name?: string,
  NIP?: string,
  Value?: number,
};

const DebtItemOverview: React.FC<Debt> = props => {
  const { Name, Value, NIP } = props;

  return (<tr>
    <td>{Name}</td>
    <td>{NIP}</td>
    <td>{Value}</td>
    <td>
      <button className="c-debt-item__button">Więcej</button>
    </td>
  </tr>);
};

export default DebtItemOverview;