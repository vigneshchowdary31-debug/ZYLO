import React from 'react';

const brandLogos = [
  {
    name: 'Infosys',
    viewBox: '0 0 200 60',
    color: '#007CC3',
    svg: <text x="0" y="44" fontFamily="Arial,sans-serif" fontSize="42" fontWeight="700" fill="#007CC3">infosys</text>
  },
  {
    name: 'Wipro',
    viewBox: '0 0 160 60',
    svg: (
      <>
        <circle cx="18" cy="30" r="14" fill="#9D2235"/>
        <text x="36" y="41" fontFamily="Arial,sans-serif" fontSize="34" fontWeight="700" fill="#3D3D3D">wipro</text>
      </>
    )
  },
  {
    name: 'TCS',
    viewBox: '0 0 120 60',
    svg: <text x="0" y="46" fontFamily="Arial,sans-serif" fontSize="48" fontWeight="900" fill="#C00">TCS</text>
  },
  {
    name: 'HDFC Bank',
    viewBox: '0 0 200 60',
    svg: (
      <>
        <rect x="0" y="8" width="10" height="44" fill="#004C97"/>
        <text x="16" y="44" fontFamily="Arial,sans-serif" fontSize="30" fontWeight="800" fill="#004C97">HDFC Bank</text>
      </>
    )
  },
  {
    name: 'Bosch',
    viewBox: '0 0 160 60',
    svg: (
      <>
        <circle cx="24" cy="30" r="22" fill="#EA0016"/>
        <text x="10" y="38" fontFamily="Arial,sans-serif" fontSize="22" fontWeight="900" fill="#fff">Bosch</text>
        <text x="52" y="40" fontFamily="Arial,sans-serif" fontSize="32" fontWeight="800" fill="#1A1A1A">Bosch</text>
      </>
    )
  },
  {
    name: 'Siemens',
    viewBox: '0 0 200 60',
    svg: <text x="0" y="44" fontFamily="Arial,sans-serif" fontSize="38" fontWeight="700" fill="#009999">Siemens</text>
  },
  {
    name: 'Accenture',
    viewBox: '0 0 230 60',
    svg: (
      <>
        <text x="0" y="44" fontFamily="Arial,sans-serif" fontSize="34" fontWeight="700" fill="#A100FF">accenture</text>
        <polygon points="196,6 210,6 203,16" fill="#A100FF"/>
      </>
    )
  },
  {
    name: 'IBM',
    viewBox: '0 0 100 60',
    svg: <text x="0" y="50" fontFamily="Arial,sans-serif" fontSize="56" fontWeight="900" fill="#1F70C1">IBM</text>
  }
];

export default function BrandsStrip() {
  // Duplicate for seamless infinite scrolling loop
  const infiniteBrands = [...brandLogos, ...brandLogos];

  return (
    <section className="brands-section" aria-label="Trusted brands">
      <div className="container">
        <p className="brands-label">Trusted by India's Leading Brands</p>
        <div className="brands-track-wrapper">
          <div className="brands-track" style={{ display: 'flex', width: 'max-content', animation: 'scrollBrands 20s linear infinite' }}>
            {infiniteBrands.map((brand, idx) => (
              <div key={idx} className="brand-logo" style={{ flexShrink: 0, margin: '0 30px' }}>
                <svg
                  viewBox={brand.viewBox}
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label={brand.name}
                  role="img"
                  style={{ width: '120px', height: '40px' }}
                >
                  {brand.svg}
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
