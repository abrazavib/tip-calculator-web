import { useEffect, useState } from 'react';
import HeaderView from './HeaderView';

interface BillInputProps {
  onValueChanged?: (value: number) => void;
}

export default function BillInputView({ onValueChanged }: BillInputProps) {
  const [text, setText] = useState('');

  useEffect(() => {
    const numericValue = parseFloat(text) || 0;
    onValueChanged?.(numericValue);
  }, [text]);

  return (
    <>
      <div className="bill-input-container">
        <div className="bill-header-wrapper">
          <HeaderView topText="Enter" bottomText="your bill" />
        </div>

        <div className="bill-input-box">
          <span className="bill-currency">$</span>
          <input
            type="text"
            inputMode="decimal"
            className="bill-textfield"
            value={text}
            placeholder="0.00"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
