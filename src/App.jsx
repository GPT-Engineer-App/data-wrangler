import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateList from "./pages/CreateList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-list" element={<CreateList />} />
      </Routes>
    </Router>
  );
}

export default App;
