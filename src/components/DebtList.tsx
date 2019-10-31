import React, { useEffect } from 'react';
import '../less/components/DebtList.less';
import axios from 'axios';
import DebtItemContainer from '../containers/DebtItemContainer';
import Loader from './Loader';
import { BASE_URL } from '../constants';

interface Props {
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

interface Debt {
  key?: number;
  Id?: number;
  Name?: string;
  NIP?: string;
  Value?: number;
  Address?: string;
  DocumentType?: string;
  Price?: number;
  Number?: string;
  activatedDebt?: number | null;
}

const DebtList: React.FC<Props> = props => {
  const { debts, setDebts } = props;

  useEffect(() => {
    const getDebts = async (): Promise<void> => {
      const result = await axios.get(`${BASE_URL}/GetTopDebts`);
      const { data } = await result;
      setDebts(data);
    };

    getDebts();
  }, [setDebts]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="debt-list__text--header">dłużnik</th>
          <th className="debt-list__text--header">nip</th>
          <th className="debt-list__text--header">kwota zadłużenia</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {!debts || debts.length === 0 ? (
          <Loader />
        ) : (
          debts.map((debt: Debt) => (
            <DebtItemContainer
              key={debt.Id}
              id={debt.Id}
              name={debt.Name}
              nip={debt.NIP}
              value={debt.Value}
              address={debt.Address}
              documentType={debt.DocumentType}
              price={debt.Price}
              number={debt.Number}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default DebtList;
