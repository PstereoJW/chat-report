import style from "./style.module.css";
import { FirstPageDataProps } from "../../../../data/constants";

const FirstPage = () => {
  return (
    <div className={style.content}>
      <div className={style.background}>
        <div className={style.cloud} />
        <div className={style.door} />
        <div className={style.rain} />
        <div className={style.cloud1} />
        <div className={style.peopleContent}>
          <div className={style.shadow} />
          <div className={style.people} />
        </div>
        <div className={style.cloud2} />
        <div className={style.sheep} />
      </div>
      <div className={style.textContent}>
        <div className={style.firstText}>
          去年我们一共发了
          <div className={style.inline}>{FirstPageDataProps.allCounts}</div>
          条消息
        </div>
        <div className={style.secondText}>
          其中有
          <div className={style.inline}>{FirstPageDataProps.emoji}</div>
          表情包和
          <div className={style.inline}>{FirstPageDataProps.originEmoji}</div>
          <div className={style.engText}>emoji</div>
        </div>
        <div className={style.thirdText}>
          {Object.keys(FirstPageDataProps.keyword)
            .sort(
              (a, b) =>
                // @ts-ignore
                FirstPageDataProps.keyword[b] - FirstPageDataProps.keyword[a]
            )
            .map((key) => (
              <TextItem
                key={key}
                name={key}
                // @ts-ignore
                count={FirstPageDataProps.keyword[key]}
              />
            ))}
          <div className={style.endText}>......</div>
        </div>
        <div className={style.textRun}>果然唯有猫猫和美食是快乐源泉</div>
      </div>
    </div>
  );
};

type props = { name: string; count: number };

const TextItem = (props: props) => {
  return (
    <div className={style.item}>
      <div className={style.name}>{props.name}</div>
      <div className={style.count}>{props.count}次</div>
    </div>
  );
};
export default FirstPage;
