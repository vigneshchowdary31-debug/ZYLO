import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonials } from '../../data/testimonials';
import SectionHeader from '../shared/SectionHeader';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="testimonials-section section-pad-lg" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Client Reviews</span>
          <h2 id="testimonials-title" className="section-title">
            What Our Clients Say
          </h2>
          <div className="google-badge">
            <div className="google-g">G</div>
            <div className="google-info">
              <div className="google-stars">★★★★★</div>
              <div className="google-rating">4.9 / 5 on Google &nbsp;•&nbsp; 320+ Reviews</div>
            </div>
          </div>
        </div>

        <div className="testimonial-carousel reveal" style={{ position: 'relative' }}>
          {/* Custom Navigation buttons connected to Swiper */}
          <button
            ref={prevRef}
            className="carousel-btn carousel-prev"
            id="carouselPrev"
            aria-label="Previous testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="testimonial-track-wrapper">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                el: '#carouselDotsCustom',
                clickable: true,
                bulletClass: 'dot',
                bulletActiveClass: 'active'
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
              className="testimonialsSwiper"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <article className="testimonial-card" style={{ height: '100%', margin: '0' }}>
                    <div className="tcard-stars">{'★'.repeat(t.stars)}</div>
                    <p className="tcard-text">"{t.text}"</p>
                    <div className="tcard-author">
                      <div className="tcard-avatar" style={{ background: t.avatarBg }}>
                        {t.avatarInitials}
                      </div>
                      <div className="tcard-info">
                        <strong>{t.author}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            ref={nextRef}
            className="carousel-btn carousel-next"
            id="carouselNext"
            aria-label="Next testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Custom Bullet Dots Container */}
        <div
          className="carousel-dots swiper-pagination-clickable swiper-pagination-bullets"
          id="carouselDotsCustom"
          role="tablist"
          aria-label="Testimonial navigation"
          style={{ display: 'flex', justifyContent: 'center', marginTop: '24px', gap: '8px' }}
        ></div>
      </div>
    </section>
  );
}
