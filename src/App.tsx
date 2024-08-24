import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/footer"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/navbar"

function App() {
  // Código TypeScript

  return (
    // Código TSX => HTML + CSS
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App

