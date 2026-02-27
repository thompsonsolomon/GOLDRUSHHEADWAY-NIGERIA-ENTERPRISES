import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Materials from './pages/Materials'
import Payment from './pages/Payment'
import Contact from './pages/Contact'
import Auth from './components/Admin/Auth'
import ProtectedRoute from './components/Helpers/ProtectedRoute'
import Admin from './pages/Admin'

function App() {
  // if (!user) {
  //   return <Navigate to="/admin/login" />
  // }
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/admin/login" element={<Auth />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
