import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostsDetail from './components/postsDetail';
import Listpage from './pages/Listpage';
import Upload from './components/upload';
import Header from './components/common/Header';

import '@fortawesome/fontawesome-free/js/all.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Listpage />} />
          <Route path="/detail/:id" element={<PostsDetail />} />
          <Route exact path="/Upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
