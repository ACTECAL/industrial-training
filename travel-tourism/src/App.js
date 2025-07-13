import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Signup from './pages/Signup';
import Login from './pages/Login';
import DestinationDetail from './pages/DestinationDetail';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminBookingsList from './pages/AdminBookingsList';
import AdminDestinations from './pages/AdminDestinations';
import AdminContacts from './pages/AdminContacts';
import AdminAnalytics from './pages/AdminAnalytics';
import AdminGallery from './pages/AdminGallery';
import AdminSignup from './pages/AdminSignup';
import AdminLogin from './pages/AdminLogin';
import UserProfile from './pages/UserProfile';
import AdminProfile from './pages/AdminProfile';
import BlogDetail from './pages/BlogDetail';
import { Routes, Route } from 'react-router-dom';   
import Header from './components/Header/Header';
import Footer  from './components/Footer/Footer';
import AdminNavbar from './components/Header/AdminNavbar';

function App() {
  const path = window.location.pathname;
  const isAdminRoute = path.startsWith('/admin') || path === '/admin-login' || path === '/admin-signup';
  return (
    <>
    {isAdminRoute ? <AdminNavbar /> : <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/:id' element={<Gallery />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<UserDashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/destination/:slug' element={<DestinationDetail />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/bookings' element={<AdminBookingsList />} />
        <Route path='/admin/destinations' element={<AdminDestinations />} />
        <Route path='/admin/contacts' element={<AdminContacts />} />
        <Route path='/admin/analytics' element={<AdminAnalytics />} />
        <Route path='/admin/gallery' element={<AdminGallery />} />
        <Route path='/admin/profile' element={<AdminProfile />} />
        <Route path='/admin-signup' element={<AdminSignup />} />
        <Route path='/admin-login' element={<AdminLogin />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
