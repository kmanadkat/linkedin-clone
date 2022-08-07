import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className="app">      

      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>

    </div>
  );
}

export default App;
