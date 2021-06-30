import s from "./App.module.scss";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import uniqid from "uniqid";

function App() {
  const id = localStorage.getItem("id");
  if (!id) {
    const uniq = uniqid();
    localStorage.setItem("id", uniq);
  }

  return (
    <div className={s.app}>
      <ChatScreen />
    </div>
  );
}

export default App;
