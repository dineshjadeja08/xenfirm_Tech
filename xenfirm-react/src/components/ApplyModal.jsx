import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ApplyModal = ({ isOpen, onClose, initialTrack = "", context = "Upskill" }) => {
  const [state, handleSubmit] = useForm("myklarlg");
  
  if (!isOpen) return null;

  const isUpskill = context === "Upskill";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {!state.succeeded ? (
          <>
            <h2 style={{ marginBottom: '10px' }}>
              {isUpskill ? (
                <>Apply for <span style={{ color: 'var(--green)' }}>Upskill</span></>
              ) : (
                <>Join the <span style={{ color: 'var(--green)' }}>Team</span></>
              )}
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Fill in your details and our team will get back to you within 48 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="apply-form">
              <input type="hidden" name="Context" value={context} />
              
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="full-name">Full Name</label>
                  <input type="text" id="full-name" name="FullName" className="form-control" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="Email" className="form-control" placeholder="john@example.com" required />
                  <ValidationError prefix="Email" field="Email" errors={state.errors} />
                </div>
              </div>
              
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="Phone" className="form-control" placeholder="+91 98765 43210" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="loc-uni">{isUpskill ? "University / College" : "Current Location"}</label>
                  <input type="text" id="loc-uni" name={isUpskill ? "University" : "Location"} className="form-control" placeholder={isUpskill ? "ABC Institute of Tech" : "Bangalore, India"} required />
                </div>
              </div>
              
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="track-role">{isUpskill ? "Interested Track" : "Applying For"}</label>
                  <select id="track-role" name="TrackOrRole" className="form-control" defaultValue={initialTrack || ""}>
                    <option value="" disabled>Select an option</option>
                    {isUpskill ? (
                      <>
                        <option value="Frontend Development">Frontend Development (React)</option>
                        <option value="Backend Development">Backend Development (Python/Django)</option>
                        <option value="UI/UX Design">UI/UX Design (Figma)</option>
                      </>
                    ) : (
                      <>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="SEO Specialist">SEO Specialist</option>
                        <option value="Digital Marketing Intern">Digital Marketing Intern</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="exp-grad">{isUpskill ? "Graduation Year" : "Experience (Years)"}</label>
                  <input type="number" id="exp-grad" name="ExperienceOrGrad" className="form-control" placeholder={isUpskill ? "2025" : "0"} required />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="portfolio">Portfolio / LinkedIn / GitHub URL</label>
                <input type="url" id="portfolio" name="Portfolio" className="form-control" placeholder="https://linkedin.com/in/username" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">{isUpskill ? "Why do you want to join XenFirm Upskill?" : "Why XenFirm?"}</label>
                <textarea id="message" name="Message" className="form-control" rows="3" placeholder={isUpskill ? "Tell us about your passion for building products..." : "Tell us about your skills and why you want to join our team..."} required></textarea>
                <ValidationError prefix="Message" field="Message" errors={state.errors} />
              </div>
              
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={state.submitting}>
                {state.submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--green-pale)', color: 'var(--green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 24px' }}>✓</div>
            <h2>Application Received!</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: '12px' }}>
              Thank you for applying to XenFirm {context}. <br/>
              Our team will review your profile and reach out via email shortly.
            </p>
            <button className="btn btn-outline" style={{ marginTop: '30px' }} onClick={onClose}>Close Window</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyModal;
