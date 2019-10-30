import React, { useEffect } from 'react';
import '../less/components/DebtList.less';
import axios from 'axios';
import DebtItemContainer from '../containers/DebtItemContainer';

export interface DebtsProps {
  debts?: [];
  setDebts: (
    debts: Debt[],
  ) => {
    type: string;
    payload: {
      debts: Debt[];
    };
  };
}

export interface Debt {
  Id?: number;
  Name?: string;
  NIP?: string;
  Value?: number;
  Address?: string;
  DocumentType?: string;
  Price?: number;
  Number?: string;
}

const DebtList: React.FC<DebtsProps> = props => {
  const { debts, setDebts } = props;

  const getDebts = async () => {
    const result = await axios.get(
      'http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts',
    );
    const { data } = await result;
    setDebts(data);
  };

  useEffect(() => {
    getDebts();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="debt-list__text--header">dłużnik</th>
          <th className="debt-list__text--header">nip</th>
          <th className="debt-list__text--header">kwota zadłużenia</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {debts && debts.map((debt: Debt) => <DebtItemContainer key={debt.Id} {...debt} />)}
      </tbody>
    </table>
  );
};

export default DebtList;
