import LeadPage from "./components/LeadPage";
import FirstPage from "./components/FirstPage";
import style from "./style.module.css";

const ContentPage = () => {
  return (
    <div className={style.root}>
      {/* <LeadPage /> */}
      <FirstPage />
    </div>
  );
};
export default ContentPage;
