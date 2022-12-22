import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Activities from './pages/Activities/Activities'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import BlogSingle from './pages/BlogSingle/BlogSingle'
import DashboardNewBlog from "./pages/Dashboard/DashboardNewBlog/DashboardNew";
import DashboardNewWork from "./pages/Dashboard/DashboardNewWork/DashboardNew";
import DashboardBase from "./pages/Dashboard/DashboardBase/DashboardBase";
import DashboardBlogsList from "./pages/Dashboard/DashboardBlogsList/DashboardBlogsList";
import DashboardWorksList from "./pages/Dashboard/DashboardWorksList/DashboardWorksList";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/activities" element={<Activities />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/blog" element={<Blog />}/>
        <Route exact path="/blog/:id" element={<BlogSingle />}/>
        <Route exact path="/dashboardNewBlog" element={<DashboardNewBlog />}/>
        <Route exact path="/dashboardNewWork" element={<DashboardNewWork />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/dashboard" element={<DashboardBase />}/>
        <Route exact path="/dashboardBlogs" element={<DashboardBlogsList />}/>
        <Route exact path="/dashboardWorks" element={<DashboardWorksList />}/>
      </Routes>
    </Router>
  );
}

export default App;
