import Chart from "./chart";
import style from "./style.module.css";

const ThirdPage = () => {
  return (
    <div>
      <div className={style.bg}>
        <div className={style.bgImg} />
      </div>
      <div className={style.white} />
      <div className={style.bubbleContent}>
        <div className={`${style.centerBubble} ${style.bubbleAni}`}>
          <div className={style.centerText}>
            <div className={style.bubbleText}>最喜欢的表情包是</div>
            <span className={style.bubbleEmoji}>猫猫emoji</span>
          </div>
        </div>
        <div className={`${style.leftBubble} ${style.bubbleAni}`}>
          <div className={style.leftText}>睡觉</div>
        </div>
        <div className={`${style.topBubble} ${style.bubbleAni}`}>
          <div className={style.topText}>吃</div>
        </div>
        <div className={`${style.rightBubble} ${style.bubbleAni}`}>
          <div className={style.rightText}>好滴</div>
        </div>
        <div className={`${style.bottomBubble} ${style.bubbleAni}`}>
          <div className={style.bottomText}>小猫咪</div>
        </div>
        <div className={`${style.bottomLeftBubble} ${style.bubbleAni}`}>
          <div className={style.bottomLeftText}>阔以</div>
        </div>
      </div>

      <div className={style.topTitle}>
        <div className="lineAni lineDelay1">「四季」里我们发送了多少消息呢</div>
      </div>

      <div className={style.boatContent}>
        <div className={style.water} />
        <div className={style.boat}>
          <div className={style.people} />
          <div className={style.boatImg} />
        </div>
      </div>
      <div className={style.title}>
        <div className={style.textContent}>
          春夏秋冬也越来越暖啦
          <br />
          不出所料我们说得最多的就是
          <div className={style.subTitle}>“哈哈哈哈[旺财]”</div>
        </div>
      </div>
      <div className={style.chart}>
        <Chart />
      </div>
    </div>
  );
};

export default ThirdPage;
