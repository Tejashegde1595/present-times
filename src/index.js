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
import { initializeFirebase } from './push-notification';
import Pwarticle from './components/pwa-article/pwarticle';
initializeFirebase();
const IntroRedirect = () => {
  const { document } = useParams();
  return <AMPDocument replace src={`/${document}`} /> 
};



ReactDOM.render((
  <BrowserRouter>
  <Routes>
    <Route exact path="/:document"  element={<IntroRedirect/>} >
    </Route>
    <Route path="/amp" element={<Shell/>} >
    </Route>
    <Route path="/sports" element={<App genre="sports"/>}>
    </Route>
    <Route path="/science" element={<App genre="science"/>}>
    </Route>
    <Route path="/entertainment" element={<App genre="entertainment"/>}>
    </Route>
    <Route path="/business" element={<App genre="business"/>}>
    </Route>
    <Route path="/general" element={<App genre="general"/>}>
    </Route>
    <Route path="/health" element={<App genre="health"/>}>
    </Route>
    <Route path="/technology" element={<App genre="technology"/>}>
    </Route>
    <Route path="/article" element={<Pwarticle/>}>
    </Route>
    <Route path="/" element={<App/>} >
    </Route>
    <Route path="/index.html" element={<App/>} >
    </Route>
  </Routes>
</BrowserRouter>
), document.getElementById('root'));
