import './App.css';
import Application from './components/application/application';
import Counter from './components/counter/counter';
import MuiMode from './components/mui/mui-mode';
import Skills from './components/skills/skills';
import Users from './components/users/users';
import { AppProviders } from './providers/app-providers';

function App() {

  const listSkills = ['HTML', 'CSS', 'JS', 'Java', 'Python']

  return (
    <AppProviders >
      <div className="App">
        <Application />
        <br />
        <Skills skills={listSkills} />
        <br />
        <br />
        <Counter />
        <br />
        <MuiMode />
        <br />
        <br />
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
