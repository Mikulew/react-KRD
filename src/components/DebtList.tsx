import React, { useState, useEffect } from 'react';
import '../less/components/DebtList.less';
import axios from 'axios';
import DebtItem from './DebtItem';

export interface DebtsProps {}

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

const DebtList: React.FC<DebtsProps> = () => {
  const [debts, setDebts] = useState<Debt[]>([]);

  const getTopDebts = async () => {
    const result = await axios.get(
      'http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts',
    );
    const { data } = await result;
    setDebts(data);
  };

  useEffect(() => {
    getTopDebts();
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
        {debts.map(debt => (
          <DebtItem key={debt.Id} {...debt} />
        ))}
      </tbody>
    </table>
  );
};

export default DebtList;
