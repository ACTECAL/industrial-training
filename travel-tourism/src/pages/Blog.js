import React from "react";
import './blog.css';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Top 5 Treks in the Himalayas',
    date: 'May 20, 2024',
    author: 'Rohit Sharma',
    tags: ['Trekking', 'Adventure', 'Himalayas'],
    location: 'Uttarakhand',
    readingTime: '6 min read',
    excerpt: 'Discover the most breathtaking treks in the Himalayas, from spiritual journeys to thrilling adventures. Here are our top picks for your next trip!',
    img: require('../assets/slider/1.jpg'),
    fullContent: `The Himalayas offer some of the most spectacular trekking experiences in the world. From the spiritual Kedarnath trek to the thrilling Roopkund adventure, here are the top 5 treks you must try:

1. **Kedarnath Trek**: A spiritual journey through scenic valleys and ancient temples, perfect for both adventure seekers and devotees.
2. **Roopkund Trek**: Famous for its mysterious skeleton lake, this trek offers breathtaking views and a challenging route.
3. **Valley of Flowers**: A UNESCO World Heritage site, this trek is a paradise for nature lovers and photographers.
4. **Har Ki Dun**: Known as the "Valley of Gods", this trek is rich in mythology and natural beauty.
5. **Pindari Glacier**: Ideal for beginners, this trek offers stunning glacier views and a chance to experience local culture.

**Tips:**
- Best time to visit: May to October
- Carry proper trekking gear and stay hydrated
- Respect local customs and the environment

Whether you are a seasoned trekker or a first-timer, the Himalayas have something for everyone. Plan your next adventure now!`
  },
  {
    id: 2,
    title: 'Travel Tips for High Altitude',
    date: 'May 10, 2024',
    author: 'Priya Verma',
    tags: ['Travel Tips', 'Health', 'Mountains'],
    location: 'Himalayan Region',
    readingTime: '4 min read',
    excerpt: 'Heading to the mountains? Learn how to prepare for high altitude travel and make your journey safe and enjoyable with these essential tips.',
    img: require('../assets/slider/2.jpg'),
    fullContent: `Traveling to high altitudes can be challenging, but with the right preparation, you can enjoy a safe and memorable trip.

**Key Tips:**
- **Acclimatize Slowly:** Spend a day or two at intermediate altitudes before going higher.
- **Stay Hydrated:** Drink plenty of water and avoid alcohol.
- **Eat Light Meals:** Heavy food can make you feel sluggish at altitude.
- **Know the Symptoms:** Watch for headache, nausea, or dizziness—these can be signs of altitude sickness.
- **Pack Wisely:** Bring warm clothing, sunscreen, and a basic first-aid kit.

**Pro Advice:**
Consult your doctor before traveling if you have any health conditions. Listen to your body and don’t rush your ascent.`
  },
  {
    id: 3,
    title: 'Cultural Wonders of Uttarakhand',
    date: 'April 28, 2024',
    author: 'Anjali Joshi',
    tags: ['Culture', 'Festivals', 'Uttarakhand'],
    location: 'Uttarakhand',
    readingTime: '5 min read',
    excerpt: 'Explore the rich culture, traditions, and festivals of Uttarakhand that make every visit to the Himalayas a unique experience.',
    img: require('../assets/slider/3.jpg'),
    fullContent: `Uttarakhand is a land of vibrant culture, ancient traditions, and colorful festivals.

**Cultural Highlights:**
- **Kumbh Mela:** One of the largest religious gatherings in the world, held every 12 years in Haridwar.
- **Nanda Devi Raj Jat:** A grand pilgrimage and festival celebrated with much fervor.
- **Holi in Kumaon:** Unique traditions and music make this festival a must-experience.

**Local Cuisine:**
Try dishes like Aloo Ke Gutke, Bhatt Ki Churkani, and Bal Mithai for an authentic taste of Uttarakhand.

**Travel Tip:**
Respect local customs and participate in village fairs to truly experience the region’s spirit.`
  },
  {
    id: 4,
    title: 'Dharchula: Gateway to the Himalayas',
    date: 'April 15, 2024',
    author: 'Vikas Rawat',
    tags: ['Travel', 'Nature', 'Dharchula'],
    location: 'Dharchula, Uttarakhand',
    readingTime: '3 min read',
    excerpt: 'Dharchula, a scenic border town on the banks of the Kali river, is a hidden gem for travelers seeking peace, culture, and adventure in the Himalayas.',
    img: require('../assets/slider/2.jpg'),
    fullContent: `Dharchula is a beautiful border town nestled on the banks of the Kali river, offering a unique blend of culture, nature, and adventure.

**Must-Visit Places:**
- **Kali River:** Perfect for peaceful walks and riverside picnics.
- **Narayan Ashram:** A spiritual retreat surrounded by mountains.
- **Local Markets:** Explore handicrafts and taste local delicacies.

**Why Visit Dharchula?**
It’s less crowded, rich in culture, and offers breathtaking Himalayan views. Ideal for those looking to explore offbeat destinations.`
  }
];

const Blog = () => {
  const navigate = useNavigate();
  return (
    <section className="blog-section">
      <h2 className="blog-title">Latest Blog Posts</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.img} alt={blog.title} className="blog-img" />
            <div className="blog-content">
              <span className="blog-date">{blog.date} • {blog.author} • {blog.readingTime}</span>
              <h3 className="blog-post-title">{blog.title}</h3>
              <div className="blog-tags-loc">
                <span className="blog-location">{blog.location}</span>
                <span className="blog-tags">{blog.tags.map(tag => <span key={tag} className="blog-tag">{tag}</span>)}</span>
              </div>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <button className="blog-readmore-btn" onClick={() => navigate(`/blog/${blog.id}`)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { blogs };
export default Blog; 