import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
   Header
} from './components'

import {
   Dashboard,
   Home,
   About,
   SignIn,
   SignUp,
   Projects
} from './pages'

export default function App() {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/projects' element={<Projects />} />
         </Routes>
      </Router>
   )
}
