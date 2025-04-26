'use client';

import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <h2>My Services</h2>
      <div className="services-container">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Membuat website yang responsif dan menarik dengan mengg7unakan teknologi React, Next.js, and Node.js.</p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>Mendesian website yang menarik dengan ramah user dan membuat pengalaman yang nyaman.</p>
        </div>
        <div className="service-item">
          <h3>SEO Optimization</h3>
          <p>Ensure your website ranks well on search engines with my SEO optimization services.</p>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 60px;
          background-color: #f4f4f4;
        }

        h2 {
          font-size: 32px;
          text-align: center;
        }

        .services-container {
          display: flex;
          justify-content: space-around;
          margin-top: 30px;
        }

        .service-item {
          background-color: white;
          padding: 20px;
          width: 30%;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin: 10px;
        }

        .service-item h3 {
          font-size: 24px;
          color: #333;
        }

        .service-item p {
          font-size: 16px;
          color: #666;
        }

        @media (max-width: 768px) {
          .services-container {
            flex-direction: column;
            align-items: center;
          }

          .service-item {
            width: 80%;
            margin-bottom: 20px;
          }

          h2 {
            font-size: 28px;
          }

          .service-item h3 {
            font-size: 22px;
          }

          .service-item p {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .service-item {
            width: 90%;
          }

          h2 {
            font-size: 24px;
          }

          .service-item h3 {
            font-size: 20px;
          }

          .service-item p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;