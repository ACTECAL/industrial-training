import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import Destination from './Destination';
import Testimonial from '../components/Testimonial/Testimonial';
import Blog from './Blog';
const Home = () => {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(() => setBackendMessage('Backend not reachable'));
  }, []);

  return (
    <>
      
     <Banner />
      
    
        <Destination />
  
      
        <Blog />
    
      

        <Testimonial />
    
      <h2> </h2>
    </>
  )
}

export default Home;