import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="mt-5 text-white" style={{ backgroundColor: '#343a40' }}>
  <div className="container py-4">
    <div className="row">
      {/* Logo and description */}
      <div className="col-md-4 mb-3">
        <h5 className="fw-bold">🎬 CinemaSpot</h5>
        <p style={{ fontSize: '0.9rem' }}>
          منصة لمحبي الأفلام والمسلسلات، اكتشف جديد السينما بكل سهولة!
        </p>
      </div>

      {/* Links */}
      <div className="col-md-4 mb-3">
        <h6 className="fw-bold">روابط مهمة</h6>
        <ul className="list-unstyled">
          <li><a href="/about" className="text-white text-decoration-none">من نحن</a></li>
          <li><a href="/contact" className="text-white text-decoration-none">تواصل معنا</a></li>
          <li><a href="/privacy" className="text-white text-decoration-none">سياسة الخصوصية</a></li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="col-md-4 mb-3">
        <h6 className="fw-bold">تابعنا</h6>
        <div className="d-flex gap-3">
          <a href="#" className="text-white fs-5"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white fs-5"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="text-center pt-3 mt-3 border-top border-secondary" style={{ fontSize: '0.85rem' }}>
      © {new Date().getFullYear()} CinemaSpot. جميع الحقوق محفوظة.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer