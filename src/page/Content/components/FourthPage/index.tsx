import style from "./style.module.css";

const FourthPage = () => {
  return (
    <div className={style.root}>
      <div className={style.water} />
      <div className={style.boatContent}>
        <div className={style.peopleContent}>
          <div className={style.light} />
          <div className={style.light2} />
          <div className={style.people} />
        </div>
        <div className={style.boatSide} />
        <div className={style.boatPeople} />
        <div className={style.star} />
      </div>
      <div className={style.textContent}>
        <div className={`${style.textAni} ${style.textLine1}`}>
          $Data 我们聊到很晚
        </div>
        <div className={`${style.textAni} ${style.textLine2}`}>04:15</div>
        <div className={`${style.textAni} ${style.textLine3}`}>
          $Content
          <br />
          $Content
        </div>
        <div className={`${style.textAni} ${style.textLine4}`}>
          没想到你这么晚了还没有睡觉
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
