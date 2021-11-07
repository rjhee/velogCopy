import './styles/App.css';

import PostsDetail from './components/postsDetail';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Listpage from './pages/Listpage';
=======
import Upload from './components/upload';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import '@fortawesome/fontawesome-free/js/all.js';
>>>>>>> 39fe50558de7de14c0c908caffd8bd7f4f1c77eb

const App = () => {
  return (
    <>
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Listpage />} />
        <Route path="detail" element={<PostsDetail />}  />
      </Routes>
    </BrowserRouter>
=======
      <BrowserRouter>
        <Switch>
          <Route exact path="/Upload" component={Upload}></Route>
          <Route path="/postsDetail" component={PostsDetail}></Route>
        </Switch>
      </BrowserRouter>
>>>>>>> 39fe50558de7de14c0c908caffd8bd7f4f1c77eb
    </>
  );
};

export default App;
