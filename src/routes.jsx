import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import FirstStage from "./pages/FirstStage"
import HomePage from "./pages/HomePage"

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/first-stage" element={<FirstStage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes