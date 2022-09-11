import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes