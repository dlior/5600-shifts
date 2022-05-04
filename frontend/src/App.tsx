import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Calendar from './pages/Calendar';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="team" element={<Team />} />
      <Route path="calendar" element={<Calendar />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>404</p>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
