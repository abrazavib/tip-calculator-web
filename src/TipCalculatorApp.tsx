import { useState } from 'react';
import BillInputView from './calculator/components/BillInputView';
import LogoView from './calculator/components/LogoView';
import ResultView from './calculator/components/ResultView';
import TipInputView from './calculator/components/TipInputView/TipInputView';
import type { Tip } from './calculator/models/Tip';

export const TipCalculatorApp = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState<Tip>({ type: 'none' });

  const calculate = () => {
    const tipPercent =
      tip.type === 'tenPercent'
        ? 0.1
        : tip.type === 'fifteenPercent'
        ? 0.15
        : tip.type === 'twentyPercent'
        ? 0.2
        : tip.type === 'custom'
        ? tip.value
        : 0;

    if (tip.type === 'custom') {
      const totalTip = tip.value;
      const totalBill = bill + totalTip;

      return {
        amountPerPerson: totalBill,
        totalBill,
        totalTip,
      };
    } else {
      const totalTip = bill * tipPercent;
      const totalBill = bill + totalTip;

      return {
        amountPerPerson: totalBill,
        totalBill,
        totalTip,
      };
    }
  };

  const result = calculate();

  return (
    <>
      <LogoView
        topText={['Mr', 'Tip']}
        bottomText="Calculator"
        logoSrc="../public/calculator.png"
      />
      <ResultView result={result} />
      <div className="spacer" />
      <BillInputView
        onValueChanged={(value) => {
          setBill(value);
        }}
      />
      <TipInputView onChange={(value) => setTip(value)} />
    </>
  );
};
