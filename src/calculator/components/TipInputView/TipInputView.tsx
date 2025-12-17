import { useState } from 'react';
import HeaderView from '../HeaderView';
import styles from './TipInputView.module.css';
import type { Tip } from '../../models/Tip';

type TipInputViewProps = {
  onChange: (tip: Tip) => void;
};

export default function TipInputView({ onChange }: TipInputViewProps) {
  const [selected, setSelected] = useState<Tip>({ type: 'none' });
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customValue, setCustomValue] = useState('');

  const handleSelect = (tip: Tip) => {
    setSelected(tip);
    onChange(tip);
    if (tip.type !== 'custom') {
      setShowCustomInput(false);
      setCustomValue('');
    }
  };

  return (
    <div className={styles.container}>
      <HeaderView topText="Choose" bottomText="Your tip" />
      <div className={styles.buttonsVertical}>
        <div className={styles.buttonsRow}>
          <button
            className={`${styles.tipButton} ${
              selected.type === 'tenPercent' ? styles.selected : ''
            }`}
            onClick={() => handleSelect({ type: 'tenPercent' })}
          >
            10%
          </button>

          <button
            className={`${styles.tipButton} ${
              selected.type === 'fifteenPercent' ? styles.selected : ''
            }`}
            onClick={() => handleSelect({ type: 'fifteenPercent' })}
          >
            15%
          </button>

          <button
            className={`${styles.tipButton} ${
              selected.type === 'twentyPercent' ? styles.selected : ''
            }`}
            onClick={() => handleSelect({ type: 'twentyPercent' })}
          >
            20%
          </button>
        </div>
      </div>

      <button
        className={`${styles.customButton} ${
          selected.type === 'custom' ? styles.selected : ''
        }`}
        onClick={() => {
          setShowCustomInput(true);
          setSelected({ type: 'custom', value: Number(customValue) || 0 });
          onChange({ type: 'custom', value: Number(customValue) || 0 });
        }}
      >
        {selected.type === 'custom' && customValue
          ? `$${customValue}`
          : 'Custom tip'}
      </button>

      {showCustomInput && (
        <input
          type="number"
          className={styles.customInput}
          placeholder="Enter custom tip"
          value={customValue}
          onChange={(e) => {
            setCustomValue(e.target.value);
            if (e.target.value) {
              handleSelect({ type: 'custom', value: Number(e.target.value) });
            }
          }}
          autoFocus
        />
      )}
    </div>
  );
}
