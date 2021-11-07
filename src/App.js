import './styles/App.css';

import PostsDetail from './components/postsDetail';
import Upload from './components/upload';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import '@fortawesome/fontawesome-free/js/all.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Upload" component={Upload}></Route>
          <Route path="/postsDetail" component={PostsDetail}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
