import "././Styles/App.scss";
import { NavigationBar } from "./components/NavigationBar";
import { HomePage } from "./components/HomePage";
import { SkillsPage } from "./components/SkillsPage";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <SkillsPage />
    </div>
  );
}

export default App;
