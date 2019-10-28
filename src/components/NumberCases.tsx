import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberCases: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  const getNumberCases = async () => {
    const result = await axios.get(
      'http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetDebtsCount',
    );
    const { data } = await result;
    setNumber(data);
  };

  useEffect(() => {
    getNumberCases();
  }, []);

  return (<>{number}</>);
};

export default NumberCases;