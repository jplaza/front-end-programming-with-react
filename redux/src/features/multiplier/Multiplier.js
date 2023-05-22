import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  multiply,
  divide,
  selectMultiple,
} from './multiplierSlice';
import styles from './Multiplier.module.css';

export function Multiplier() {
  const multiplication = useSelector(selectMultiple);
  const dispatch = useDispatch();
  const [multiplyAmount, setMultiplyAmount] = useState('2');

  const multiplierValue = Number(multiplyAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Divide value"
          onClick={() => dispatch(divide(multiplierValue))}
        >
          ÷
        </button>
        <span className={styles.value}>{multiplication}</span>
        <button
          className={styles.button}
          aria-label="Multiply value"
          onClick={() => dispatch(multiply(multiplierValue))}
        >
          x
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set multiply amount"
          value={multiplyAmount}
          onChange={(e) => setMultiplyAmount(e.target.value)}
        />
      </div>
    </div>
  );
}
