import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        {/* Feed */}
        {/* Widget */}
      </div>
        
    </div>
  );
}

export default App;
