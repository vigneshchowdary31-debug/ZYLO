import React, { useState } from 'react';

/**
 * Reusable premium Contact Form component with interactive state,
 * client-side schema validation, real-time feedback, and submit animations.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const eventTypes = [
    'Corporate Conference',
    'Product Launch',
    'Award Ceremony',
    'Corporate Retreat',
    'Exhibition / Trade Show',
    'Team Outing',
    'Dealer / Distributor Meet',
    'Inauguration / Opening Ceremony',
    'Ground Breaking Ceremony',
    'MICE Event',
    'Other'
  ];

  const validateField = (name, value) => {
    let errorMsg = '';
    if (!value || !value.trim()) {
      errorMsg = 'This field is required';
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMsg = 'Please enter a valid email address';
    }
    return errorMsg;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error dynamically when user corrects typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    const requiredFields = ['fname', 'lname', 'email', 'phone', 'eventType'];
    
    requiredFields.forEach(field => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Trigger submission simulation
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form success state after 3 seconds
      setTimeout(() => {
        setFormData({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          eventType: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1200);
  };

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fname">First Name *</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Rajesh"
            value={formData.fname}
            onChange={handleChange}
            onBlur={handleBlur}
            style={errors.fname ? { borderColor: '#ef4444' } : undefined}
            required
          />
          {errors.fname && (
            <span className="field-error" style={{ display: 'block', fontSize: '0.75rem', color: '#ef4444', marginTop: '4px' }}>
              {errors.fname}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name *</label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Kumar"
            value={formData.lname}
            onChange={handleChange}
            onBlur={handleBlur}
            style={errors.lname ? { borderColor: '#ef4444' } : undefined}
            required
          />
          {errors.lname && (
            <span className="field-error" style={{ display: 'block', fontSize: '0.75rem', color: '#ef4444', marginTop: '4px' }}>
              {errors.lname}
            </span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="rajesh@company.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          style={errors.email ? { borderColor: '#ef4444' } : undefined}
          required
        />
        {errors.email && (
          <span className="field-error" style={{ display: 'block', fontSize: '0.75rem', color: '#ef4444', marginTop: '4px' }}>
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+91 89776 11886"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          style={errors.phone ? { borderColor: '#ef4444' } : undefined}
          required
        />
        {errors.phone && (
          <span className="field-error" style={{ display: 'block', fontSize: '0.75rem', color: '#ef4444', marginTop: '4px' }}>
            {errors.phone}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="event-type">Event Type *</label>
        <select
          id="event-type"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          onBlur={handleBlur}
          style={errors.eventType ? { borderColor: '#ef4444' } : undefined}
          required
        >
          <option value="" disabled>Select event type</option>
          {eventTypes.map((type, idx) => (
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>
        {errors.eventType && (
          <span className="field-error" style={{ display: 'block', fontSize: '0.75rem', color: '#ef4444', marginTop: '4px' }}>
            {errors.eventType}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell Us About Your Event</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Describe your event, expected attendance, date, venue preferences..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-gold btn-block"
        disabled={isSubmitting || submitSuccess}
        style={{
          background: submitSuccess ? '#22c55e' : undefined,
          opacity: isSubmitting ? 0.7 : undefined,
          borderColor: submitSuccess ? '#22c55e' : undefined
        }}
      >
        {isSubmitting ? 'Sending...' : submitSuccess ? '✓ Enquiry Sent!' : 'Send Enquiry →'}
      </button>
      <p className="form-note">We respond within 24 hours. Your information is secure with us.</p>
    </form>
  );
}
