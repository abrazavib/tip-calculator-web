interface AmountProps {
  title: string;
  amount: number;
  align: 'left' | 'right';
}

export default function AmountView({ title, amount, align }: AmountProps) {
  const formatted = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className={`amount-contariner ${align}`}>
      <p className="amount-title">{title}</p>
      <p className="amount-value">{formatted}</p>
    </div>
  );
}
