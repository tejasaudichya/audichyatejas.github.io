import React from 'react'

const Contact = () => {
  return (
<section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <p class="contact-description">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                
                <div class="contact-methods">
                    <a href="mailto:tejas@example.com" class="contact-card">
                        <i class="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <p>tejas@example.com</p>
                    </a>
                    <a href="https://linkedin.com/in/tejasaudichya" class="contact-card">
                        <i class="fab fa-linkedin"></i>
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/tejasaudichya</p>
                    </a>
                    <a href="https://github.com/tejasaudichya" class="contact-card">
                        <i class="fab fa-github"></i>
                        <h3>GitHub</h3>
                        <p>github.com/tejasaudichya</p>
                    </a>
                    <a href="#" class="contact-card">
                        <i class="fas fa-phone"></i>
                        <h3>Phone</h3>
                        <p>+91 XXXXX XXXXX</p>
                    </a>
                </div>

                <form class="contact-form" id="contactForm">
                    <input type="text" placeholder="Your Name" required/>
                    <input type="email" placeholder="Your Email" required/>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

  )
}

export default Contact
