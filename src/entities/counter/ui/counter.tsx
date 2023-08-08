import { useTranslation } from 'react-i18next';
import { Button } from '@/shared';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

const Counter = () => {
  // const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { increment, decrement, add } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <div>
      <h1 data-testid="value">{counterValue}</h1>
      <Button
        data-testid="increment-btn"
        onClick={handleIncrement}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={handleDecrement}
      >
        {t('decrement')}
      </Button>
    </div>
  );
};

export { Counter };
