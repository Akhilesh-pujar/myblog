
import './App.css';
import Blogentry from './Components/Blogsentry.js/Blogentry';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route index element={
        <main>
          <Header />
          <Blogentry />
          <Blogentry />
          <Blogentry />
        </main>
      }></Route>

      <Route path={'/login'} element={
        <main>
          <Header />
          <Login />
        </main>
      }>
      </Route>
      <Route path={'/register'} element={
        <main>
          <Header />
          <Register />
        </main>
      }>
      </Route>
    </Routes>

  );
}

export default App;
