import React, { useEffect, useRef } from 'react';

// Yeh ek custom hook hai fade-in animation ke liye
function useFadeInOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
}

function HomePage() {
  useFadeInOnScroll(); // Animation hook ko call karein
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <main>
      {/* Section 1: Video Hero */}
      <section className="page-section h-screen relative">
        <video ref={videoRef} id="drone-video" src="/home1.mp4" autoPlay loop muted playsInline></video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">
            ENGINEERING THE FUTURE OF FLIGHT
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            Explore the world of Aeromodelling Club MMMUT
          </p>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 fade-in-up">
          <div className="md:w-1/2">
            <h2 className="section-title">WHO WE ARE</h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              We are a community of innovators, builders, and dreamers at MMMUT, united by a passion for aerospace. We transform theoretical knowledge into real-world flight, designing and fabricating advanced UAVs to compete at a national level and push the boundaries of what's possible.
            </p>
            <a href="about.html" className="hero-button">Learn More About Us</a>
          </div>
          <div className="md:w-1/2">
            <img loading="lazy" src="/gallery/1.jpg" alt="Team Photo" className="rounded-lg shadow-2xl w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
          <h2 className="section-title">WHAT WE DO</h2>
          <p className="section-subtitle">Our work spans across workshops, competitive events, and cutting-edge research and development.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="info-card p-8"><i className="fas fa-chalkboard-teacher text-4xl mb-4"></i><h3 className="text-xl font-bold mb-2">Workshops & Training</h3><p>We conduct regular sessions on aerodynamics, CAD modelling, and flight control systems.</p></div>
            <div className="info-card p-8"><i className="fas fa-trophy text-4xl mb-4"></i><h3 className="text-xl font-bold mb-2">Competitions & Events</h3><p>We participate in SAE aero challenges and host intercollegiate model aircraft contests.</p></div>
            <div className="info-card p-8"><i className="fas fa-cogs text-4xl mb-4"></i><h3 className="text-xl font-bold mb-2">Research & Development</h3><p>Members design, prototype, and test gliders, RC planes, quadcopters, and fixed-wing UAS.</p></div>
          </div>
        </div>
      </section>

      {/* Baaki sabhi sections... */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
            <h2 className="section-title">INNOVATION IN ACTION</h2>
            <p className="section-subtitle">A glimpse into our latest creations, from high-endurance fixed-wings to agile multi-rotors.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="preview-card"><img loading="lazy" src="/gallery/dragonfly.jpg" className="h-56 w-full object-cover" alt="Red Dragonfly Project"/><div className="p-6"><h3 className="text-xl font-bold">Red-Dragonfly</h3><p className="mt-2">Advanced quadcopter for AI-based object detection and surveillance missions.</p></div></div>
                <div className="preview-card"><img loading="lazy" src="/gallery/push.jpg" className="h-56 w-full object-cover" alt="Pusher Fixed Wing Project"/><div className="p-6"><h3 className="text-xl font-bold">Pusher Fixed-Wing</h3><p className="mt-2">An efficient long-endurance aircraft designed for payload delivery and aerial mapping.</p></div></div>
                <div className="preview-card"><img loading="lazy" src="/gallery/balsa.jpg" className="h-56 w-full object-cover" alt="Balsa Glider Project"/><div className="p-6"><h3 className="text-xl font-bold">Balsa Glider</h3><p className="mt-2">A lightweight, high-efficiency glider built for maximum flight time and stability.</p></div></div>
            </div>
            <div className="mt-12"><a href="projects.html" className="hero-button">Explore All Projects</a></div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
            <h2 className="section-title">OUR ACHIEVEMENTS</h2>
            <p className="section-subtitle">Celebrating our journey of success and dedication in national-level competitions.</p>
            <div className="max-w-3xl mx-auto text-left space-y-12">
                <div className="timeline-item"><div className="flex items-start gap-6"><img loading="lazy" src="/Photos/aerothon22.png" alt="Aerothon 2022" className="w-24 h-24 rounded-md object-contain p-1 flex-shrink-0"/><div><h3 className="text-2xl font-bold mb-2">Aerothon 2022 – National Champion</h3><p>Our journey began with Aerothon 2022, where Team Starfleet proudly secured First Place...</p></div></div></div>
                <div className="timeline-item"><div className="flex items-start gap-6"><img loading="lazy" src="/Photos/aerothon23.jpeg" alt="Aerothon 2023" className="w-24 h-24 rounded-md object-contain p-1 flex-shrink-0"/><div><h3 className="text-2xl font-bold mb-2">Aerothon 2023 – Consecutive Qualification</h3><p>Building on our success, we qualified again for Aerothon 2023...</p></div></div></div>
                <div className="timeline-item"><div className="flex items-start gap-6"><img loading="lazy" src="/Photos/sih2.jpeg" alt="SIH 2025" className="w-24 h-24 rounded-md object-contain p-1 flex-shrink-0"/><div><h3 className="text-2xl font-bold mb-2">Internal SIH 2025 – Rank 1</h3><p>Continuing our streak, we clinched the First Prize in the Internal Round of the Smart India Hackathon (SIH) 2025...</p></div></div></div>
            </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
          <div className="text-center fade-in-up">
              <h2 className="section-title">VISUAL JOURNEY</h2>
              <p className="section-subtitle">A collection of moments from our workshops, competitions, and build sessions.</p>
          </div>
          <div className="gallery-slider">
              <div className="slide-track">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <div className="slide"><img loading="lazy" src="/slider/i1.jpg" alt="Gallery Image 1"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i2.jpg" alt="Gallery Image 2"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i3.jpg" alt="Gallery Image 3"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i4.jpg" alt="Gallery Image 4"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i5.jpg" alt="Gallery Image 5"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i6.jpg" alt="Gallery Image 6"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i7.jpg" alt="Gallery Image 7"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i8.jpg" alt="Gallery Image 8"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i9.jpg" alt="Gallery Image 9"/></div>
                      <div className="slide"><img loading="lazy" src="/slider/i10.jpg" alt="Gallery Image 10"/></div>
                    </React.Fragment>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cta-section">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">READY TO BUILD THE FUTURE?</h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto mt-4 mb-8">Become a part of our journey to innovate and excel. We're always looking for passionate individuals to join our team.</p>
              <a href="reach.html" className="hero-button">Join Our Team</a>
          </div>
      </section>
      
      {/* Footer */}
      <footer className="site-footer pt-20 pb-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-10">
                 <a href="index.html" className="inline-block mb-4">
                    <img src="/gallery/logo.png" alt="Club Logo" className="h-24 w-auto rounded-full mx-auto"/>
                </a>
                <h3 className="text-3xl font-black text-primary">Aeromodelling Club</h3>
                <p className="text-md mt-2 uppercase tracking-widest text-secondary">Design. Build. Fly. Inspire.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div className="mb-8 md:mb-0">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href="about.html" className="footer-link">About Us</a></li>
                        <li><a href="projects.html" className="footer-link">Projects</a></li>
                        <li><a href="team.html" className="footer-link">Our Team</a></li>
                        <li><a href="reach.html" className="footer-link">Contact</a></li>
                    </ul>
                </div>
                <div className="mb-8 md:mb-0">
                    <h3 className="footer-heading">Get In Touch</h3>
                    <p>Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, Uttar Pradesh, India – 273010</p>
                     <a href="mailto:malaviyans.starfleet@gmail.com" className="footer-link inline-block mt-3">malaviyans.starfleet@gmail.com</a>
                </div>
                <div>
                    <h3 className="footer-heading">Follow Us</h3>
                    <div className="flex justify-center space-x-5 text-2xl">
                        <a href="https://www.linkedin.com/company/malviyans-starfleet/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/malaviyans.starfleet?igsh=MXZremhobWpzZ3Y5" className="social-icon"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center text-sm">
            <p>&copy; 2025 Aeromodelling Club MMMUT. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;