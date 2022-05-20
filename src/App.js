import "./App.css";
import StateTutorial from "./components/useState/StateTutorial";
import ReducerTutorial from "./components/useReducer/ReducerTutorial";
import EffectTutorial from "./components/useEffect/EffectTutorial";
import RefTutorial from "./components/useRef/RefTutorial";
import ContextTutorial from "./components/useContext/ContextTutorial";
import MemoTutorial from "./components/useMemo/MemoTutorial";
import CallBackTutorial from "./components/useCallback/CallbackTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <ContextTutorial />
      <MemoTutorial />
      <CallBackTutorial />
    </div>
  );
}

export default App;
