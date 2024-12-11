import React from 'react'
import '../../Styles/Layout.scss'
const Footer = () => {
  return (
    <footer className='p-2'>
      <section>
        <div className='container1 d-flex'>
          <div className='category'>
            <span>Categories</span>
            <ul className='d-flex gap-2 flex-column'>
              <li><a href="/">Trending</a></li>
              <li><a href="/">Sports</a></li>
              <li><a href="/">Education</a></li>
            </ul>
          </div>
          <div className='contact-us'> 
            <span>Contact Us</span>
            <ul className='d-flex'>
              <li><a href="tel:"><i className='bi bi-telephone'></i></a></li>
              <li><a href="tel:"><i className='bi bi-envelope'></i></a></li>
              <li><a href="tel:"><i className='bi bi-instagram'></i></a></li>
              <li><a href="tel:"><i className='bi bi-facebook'></i></a></li>
            </ul>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40945.627838292035!2d31.05322248359673!3d-17.789521732043934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5673118070f%3A0xb9107787eed9e671!2sUniversity%20of%20Zimbabwe!5e0!3m2!1sen!2szw!4v1733588244274!5m2!1sen!2szw" width="600" height="200" style={{border:0}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className='rights'>
        @2024 All Rights Reserverd
      </section>
    </footer>
  )
}

export default Footer