import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFoundPage from "./pages/NotFound"
import IndexPage from "./pages/Index"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
