import React from 'react'

import Home from './Pages/Home'
import Login from './Pages/Login'
// import SignUp from './Pages/SignUp'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import { Route, Routes, Navigate } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import RecipeInfo from './Components/RecipeInfo'
import SignUp from './Pages/SignUp'
import FooterSection from './Components/FooterSection'
import MealCategory from './Pages/MealCategory'

function App() {
  return (
    <>

      <NavigationBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/meal/:CategoryName" element={<MealCategory />} />
        <Route path="/info/:MealId" element={<RecipeInfo />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/Login" replace={true} />} />

      </Routes>
      <FooterSection />
    </>
  )
}

export default App