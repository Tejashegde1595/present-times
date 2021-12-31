import AMPDocument from './components/amp-document/amp-document';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Shell from '../src/components/shell/shell';
import App from './App';

const IntroRedirect = () => {
  const { document } = useParams();
  return <AMPDocument replace src={`/content/${document}`} /> 
};


ReactDOM.render((
  <BrowserRouter>
  <Routes>
    <Route exact path="/content/:document"  element={<IntroRedirect/>} >
    </Route>
    <Route path="/amp" element={<Shell/>} >
    </Route>
    <Route path="/" element={<App/>} >
    </Route>
  </Routes>
</BrowserRouter>
), document.getElementById('root'));
