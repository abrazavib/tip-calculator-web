import '../../index.css';
import AmountView from './AmountView';

interface Result {
  amountPerPerson: number;
  totalBill: number;
  totalTip: number;
}

interface ResultViewProps {
  result: Result;
}

export default function ResultView({ result }: ResultViewProps) {
  const formatted = result.amountPerPerson.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="result-container">
      <div className="result-vstack">
        <p className="result-header">Total p/person</p>

        <p className="result-amount-per-person">
          <span className="small">$</span>
          {formatted.replace('$', '')}
        </p>

        <div className="result-line" />
        <div className="result-spacer" />

        <div className="result-hstack">
          <AmountView
            title="Total Bill"
            amount={result.totalBill}
            align="left"
          />
          <AmountView
            title="Total Tip"
            amount={result.totalTip}
            align="right"
          />
        </div>
      </div>
    </div>
  );
}
