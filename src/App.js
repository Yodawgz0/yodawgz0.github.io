import "././Styles/App.scss";
import { NavigationBar } from "./components/NavigationBar";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
    </div>
  );
}

export default App;
