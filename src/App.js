import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Doctors from './Doctors';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Testimonal from './Testimonal';
import Treatment from './Treatment';

function App() {
  const routerConfig = createBrowserRouter([{ path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/doctors", element: <Doctors /> },
  { path: "/footer", element: <Footer /> },
  { path: "/header", element: <Header /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/testimonal", element: <Testimonal /> },
  { path: "/treatment", element: <Treatment /> }
  ])
  return (
    <div className="App">
      <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  );
}

export default App;
