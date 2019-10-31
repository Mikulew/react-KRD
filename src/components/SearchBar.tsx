import React, { useState } from 'react';
import axios from 'axios';
import '../less/components/SearchBar.less';
import { BASE_URL } from '../constants';

export interface DebtsProps {
  setDebts: (
    debts: Debt[],
  ) => {
    type: string;
    payload: {
      debts: Debt[];
    };
  };
  activateDebt: (
    id?: null,
  ) => {
    type: string;
    payload: {
      debt: null;
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

const SearchBar: React.FC<DebtsProps> = props => {
  const [text, setText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { setDebts, activateDebt } = props;

  const searchFilteredDebts = async (): Promise<void> => {
    setDebts([]);
    try {
      const result = await axios.post(`${BASE_URL}/GetFilteredDebts`, { text });
      const { data } = await result;
      activateDebt(null);
      setError(null);
      if (data.length === 0) {
        return setError('Nie znaleziono dłużników podanej frazy');
      }
      setDebts(data);
    } catch {
      setError('Podana fraza musi być większa niż 3 znaki');
    }
  };

  return (
    <>
      <div>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="search"
          className="search-bar search-bar__input"
        />
        <button
          type="button"
          className="search-bar search-bar__button"
          onClick={() => searchFilteredDebts()}
        >
          szukaj
        </button>
      </div>
      {error !== null ? <div className="search-bar__error-text">{error}</div> : null}
    </>
  );
};

export default SearchBar;
