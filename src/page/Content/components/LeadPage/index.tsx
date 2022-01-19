import style from "./style.module.css";

const LeadPage = () => {
  return (
    <div className={style.content}>
      <div className={style.background}>
        <div className={style.cloud} />
        <div className={style.tree} />
        <div className={style.table} />
        <div className={style.cloud2} />
        <div className={style.table2} />
        <div className={style.cloud3} />
        <div className={style.birds} />
        <div className={style.water} />
      </div>
      <div className={style.peopleContent}>
        <div className={style.people}>
          <div className={style.bird} />
          <div className={style.lelePeople} />
        </div>
        <div className={style.bottomCloud} />
      </div>
      <div className={style.textContent}>
        <div className={style.title}>嗨 乐乐</div>
        <div className={style.text}>还记得2021有趣的瞬间嘛</div>
        <div className={style.text}>出发去看看吧~</div>
      </div>
    </div>
  );
};
export default LeadPage;
