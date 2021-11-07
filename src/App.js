import './styles/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostsDetail from './components/postsDetail';
import Listpage from './pages/Listpage';
import Upload from './components/upload';

import '@fortawesome/fontawesome-free/js/all.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listpage />} />
          <Route path="detail" element={<PostsDetail />} />
          <Route exact path="/Upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
