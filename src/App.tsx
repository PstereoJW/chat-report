import "./App.css";
import { firstPage } from "./data";
import StartPage from "./page/StartPage";
import FirstPage from "./page/FirstPage";

function App() {
  console.log(firstPage);
  return (
    <div className="App">
      <section>
        <StartPage />
      </section>
      {/* <section>
        <FirstPage />
      </section> */}
    </div>
  );
}

export default App;
