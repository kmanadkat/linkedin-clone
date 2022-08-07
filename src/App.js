import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">      

      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Feed */}
        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
