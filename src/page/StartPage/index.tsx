import style from "./style.module.css";
const StartPage = () => {
  return (
    <div className={style.container}>
      <div className={style.background} />
      <div className={style.river} />
      <div className={style.peopleContent}>
        <div className={style.peopleAnimation}>
          <div className={style.leleCloud} />
          <div className={style.lelePeople} />
        </div>
        <div className={style.peopleAnimation}>
          <div className={style.selfCloud} />
          <div className={style.selfPeople} />
        </div>
      </div>
      <div className={style.title}>
        <div className={style.nickname}>@乐乐</div>
        <div className={style.englishTitle}>
          <div className={style.number}>2021</div>
          <div className={style.subTitle}>
            WECHAT
            <br />
            REPORT
          </div>
        </div>
        <div className={style.chineseTitle}>年度微信报告</div>
      </div>
      <div className={style.startBtnContent}>
        <div className={style.back} />
        <div className={`${style.back} ${style.radius}`} />
        <div className={style.arrow} />
        <div className={style.tipContent}>
          <div className={style.tip}>点击开启</div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
