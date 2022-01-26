import LeadPage from "./components/LeadPage";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import style from "./style.module.css";
import FourthPage from "./components/FourthPage";

const ContentPage = () => {
  const [animationConfig, setAnimationConfig] = useState<{
    currNum: number;
    nextNum: number;
    loading: boolean;
  }>({ currNum: 0, nextNum: 0, loading: false });
  const startY = useRef(0);
  const endY = useRef(0);
  const handleTouchStart = (e: any) => {
    startY.current = e.touches[0].pageY;
  };
  const handleTouchEnd = (e: any) => {
    endY.current = e.changedTouches[0].pageY;
    if (endY.current < startY.current) {
      setAnimationConfig((pre) => {
        return { ...pre, nextNum: pre.currNum + 1, loading: true };
      });
    } else {
      if (!animationConfig.currNum) return;
      setAnimationConfig((pre) => {
        return { ...pre, nextNum: pre.currNum - 1, loading: true };
      });
    }
  };
  const handleExited = () => {
    setAnimationConfig((pre) => {
      return { ...pre, currNum: pre.nextNum, loading: false };
    });
  };

  return (
    <div
      className={style.root}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CSSTransition
        in={!animationConfig.currNum && !animationConfig.loading}
        timeout={1800}
        onExited={handleExited}
        classNames="my-node"
      >
        <div>{!animationConfig.currNum && <LeadPage />}</div>
      </CSSTransition>
      <CSSTransition
        in={animationConfig.currNum === 1 && !animationConfig.loading}
        timeout={1800}
        onExited={handleExited}
        classNames="my-node"
      >
        <div>{animationConfig.currNum === 1 && <FirstPage />}</div>
      </CSSTransition>
      <CSSTransition
        in={animationConfig.currNum === 2 && !animationConfig.loading}
        timeout={1800}
        onExited={handleExited}
        classNames="my-node"
      >
        <div>{animationConfig.currNum === 2 && <SecondPage />}</div>
      </CSSTransition>
      <CSSTransition
        in={animationConfig.currNum === 3 && !animationConfig.loading}
        timeout={1800}
        onExited={handleExited}
        classNames="my-node"
      >
        <div>{animationConfig.currNum === 3 && <ThirdPage />}</div>
      </CSSTransition>
      <CSSTransition
        in={animationConfig.currNum === 4 && !animationConfig.loading}
        timeout={1800}
        onExited={handleExited}
        classNames="my-node"
      >
        <div>{animationConfig.currNum === 4 && <FourthPage />}</div>
      </CSSTransition>
    </div>
  );
};
export default ContentPage;
