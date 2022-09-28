import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import BlogDetail from "./BlogDetail";
import NotFound from "./NotFound";

function App() {

  return (
    <Router>
      <div className="w-[1024px] mx-auto">
        <Navbar/>
        <div className="mt-12">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <CreateBlog/>
            </Route>
            <Route path="/blog/:id">
              <BlogDetail/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
