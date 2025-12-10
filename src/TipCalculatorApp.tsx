import { useState } from 'react';
import BillInputView from './calculator/components/BillInputView';
import LogoView from './calculator/components/LogoView';
import ResultView from './calculator/components/ResultView';

export const TipCalculatorApp = () => {
  const [bill, setBill] = useState(0);

  return (
    <>
      <LogoView
        topText={['Mr', 'Tip']}
        bottomText="Calculator"
        logoSrc="../public/calculator.png"
      />
      <ResultView
        result={{
          amountPerPerson: bill / 4 || 0,
          totalBill: bill,
          totalTip: bill * 0.15,
        }}
      />
      <div className="spacer" />
      <BillInputView
        onValueChanged={(value) => {
          console.log('Bill update - ', value);
          setBill(value);
        }}
      />
    </>
  );
};
