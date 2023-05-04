import {useState} from "react";

import classes from './style.module.scss'


const Counter = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <div className={classes.main}>
      {count}
      <button onClick={() => setCount(prev => ++prev )}>Plus</button>
    </div>
  );
};

export {Counter};
