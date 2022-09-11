import { BrowserRouter, Route, Routes } from "react-router-dom"
import FifthyStage from "./pages/FifthyStage"
import FirstStage from "./pages/FirstStage"
import FourthStage from "./pages/FourthStage"
import HomePage from "./pages/HomePage"
import LastStage from "./pages/LastStage"
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
        <Route path="/fourth-stage" element={<FourthStage />}/>
        <Route path="/fifthy-stage" element={<FifthyStage />}/>
        <Route path="/last-stage" element={<LastStage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes