import React from 'react';
import Button from '../shared/Button';

export default function SubsidiaryProduction() {
  return (
    <section className="subsidiary-section section-pad-lg" id="production" aria-labelledby="production-title">
      <div className="container">
        <div className="subsidiary-card reveal">
          <div className="subsidiary-content">
            <span className="section-tag">In-House Division</span>
            <h2 id="production-title" className="section-title">
              Zylo Production
            </h2>
            <p className="subsidiary-lead">
              Our in-house production &amp; fabrication division that handles all technical and creative production needs — from exhibition stall fabrication to custom stage builds and large-format printing.
            </p>
            <ul className="subsidiary-list">
              <li>
                <span className="gold-bullet">→</span> Stage &amp; Set Design &amp; Fabrication
              </li>
              <li>
                <span className="gold-bullet">→</span> Exhibition Stall Design &amp; Build
              </li>
              <li>
                <span className="gold-bullet">→</span> LED &amp; AV Equipment Supply
              </li>
              <li>
                <span className="gold-bullet">→</span> Large-Format Printing &amp; Branding
              </li>
              <li>
                <span className="gold-bullet">→</span> Lighting Rigs &amp; Special Effects
              </li>
            </ul>
            <Button to="/contact" variant="gold">
              Work With Zylo Production
            </Button>
          </div>
          <div className="subsidiary-logo-mark">
            <div className="zp-logo">
              <span className="zp-z">Z</span>
              <span className="zp-p">P</span>
              <div className="zp-tagline">PRODUCTION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
