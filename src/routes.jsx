import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import FirstStage from "./pages/FirstStage"
import HomePage from "./pages/HomePage"
import SecondStage from "./pages/SecondStage/index"
import ThirdStage from "./pages/ThirdStage"

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/first-stage" element={<FirstStage />}/>
        <Route path="/second-stage" element={<SecondStage />}/>
        <Route path="/third-stage" element={<ThirdStage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes