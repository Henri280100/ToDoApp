import {HashRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/App.scss";
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import NotePages from "./pages/NotePatges";

function App() {
  return (
    <>
      <Router>
        <div className="container" id="main">
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" exact element={<NoteListPage />} />
              <Route path="/note/:id" element={<NotePages />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
