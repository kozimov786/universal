import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import DetailPage from "./pages/DetailPage";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
