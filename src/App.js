import "././Styles/App.scss";
import { NavigationBar } from "./components/NavigationBar";
import { HomePage } from "./components/HomePage";
import { SkillsPage } from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
