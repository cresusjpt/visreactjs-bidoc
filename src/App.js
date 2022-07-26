import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import InternApp from './components/InternApp';
import NodesDetail from './components/NodesDetail';
import MySidebar from './components/MySidebar';
import MyNavbar from './components/MyNavbar';
import PageHeader from './components/PageHeader';
import Main from './components/Main';

function App() {

  return (
      <div className="container-scroller">
            <MySidebar />
            <div className="container-fluid page-body-wrapper">
                <MyNavbar />
                <div className="main-panel">
                    <div className="content-wrapper">
            <PageHeader />
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/details' element={<NodesDetail />} />
            </Routes>   
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
