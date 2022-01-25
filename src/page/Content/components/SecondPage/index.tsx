import { SecondPageDataProps } from "../../../../data/constants";
import { TimePeriodMap } from "../../../../type";
import style from "./style.module.css";

const SecondPage = () => {
  console.log(SecondPageDataProps);

  return (
    <div className={style.content}>
      <div className={style.bgCloud} />
      <div className={style.halfContent}>
        <div className={style.people} />
        <div>
          {Object.keys(SecondPageDataProps).map(
            //@ts-ignore
            (key: TimePeriodMap, index: number) => (
              <TimePeriod
                index={index}
                name={key}
                count={SecondPageDataProps[key]}
              />
            )
          )}
        </div>
        <div className={style.bottomCloud} />
        <div className={style.title}>
          <div className="line lineDelay1">
            来看看2021聊得最多的时间
            <br />
            睡这么晚肯定是你传染的(bushi
          </div>
        </div>
      </div>
    </div>
  );
};

type TimePeriodProps = {
  index: number;
  name: string;
  count: string;
};

const TimePeriod = ({ index, name, count }: TimePeriodProps) => {
  return (
    <div key={name} className={style[`timeContent${index}`]}>
      <div className={`${style.textRunAni} ${style[`textContent${index}`]}`}>
        <div className={`${style.textFont} ${style[`textName${index}`]}`}>
          {name}
        </div>
        <div className={style[`textCount${index}`]}>{count}</div>
      </div>
    </div>
  );
};

export default SecondPage;
