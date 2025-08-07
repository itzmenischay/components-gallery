import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/nav/Navbar'

function App() {
  return (
    <main className="h-screen overflow-y-auto">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
