import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { certificates } from '../data/certificates';
import './CertificateSearch.css';

export default function CertificateSearch() {
  const [certificateId, setCertificateId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      setError('Please enter a certificate ID');
      return;
    }

    const id = certificateId.trim().toUpperCase();
    
    if (certificates[id]) {
      navigate(`/verify/${id}`);
    } else {
      setError(`Certificate "${id}" not found. Please check and try again.`);
      setCertificateId('');
    }
  };

  const handleInputChange = (e) => {
    setCertificateId(e.target.value);
    setError('');
  };

  const exampleIds = ['XF-INT-2026-001', 'XF-INT-2026-002', 'XF-INT-2026-003'];

  const handleExampleClick = (id) => {
    navigate(`/verify/${id}`);
  };

  return (
    <div className="search-container">
      {/* Header */}
      <div className="search-header">
        <div className="search-branding">
          <img src="/assets/img/xenfirm_logo_1775124922169.png" alt="XenFirm Technologies" />
          <div>
            <h1 className="search-title">XenFirm</h1>
            <p className="search-subtitle">Certificate Verification</p>
          </div>
        </div>
        <p className="search-description">
          Enter your certificate ID to verify your internship completion
        </p>
      </div>

      {/* Search Card */}
      <div className="search-card">
        <form onSubmit={handleSearch} className="search-form">
          <div className="form-group">
            <label htmlFor="certificate-id" className="form-label">
              Certificate ID
            </label>
            <div className="input-wrapper">
              <input
                id="certificate-id"
                type="text"
                placeholder="e.g., XF-INT-2026-001"
                value={certificateId}
                onChange={handleInputChange}
                className={`search-input ${error ? 'input-error' : ''}`}
                autoFocus
              />
              <span className="input-icon">🔍</span>
            </div>
            {error && <span className="error-message">{error}</span>}
          </div>

          <button type="submit" className="btn-search">
            Verify Certificate
          </button>
        </form>

        {/* Example IDs */}
        <div className="examples-section">
          <p className="examples-label">Example IDs:</p>
          <div className="examples-list">
            {exampleIds.map((id) => (
              <button
                key={id}
                type="button"
                className="example-btn"
                onClick={() => handleExampleClick(id)}
              >
                {id}
              </button>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="info-box">
          <p className="info-icon">ℹ️</p>
          <p className="info-text">
            Your certificate ID is unique and provided by XenFirm Technologies upon internship completion.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="search-footer">
        <h3>XenFirm Technologies</h3>
        <div className="footer-content">
          <p>📧 hello@xenfirm.com</p>
          <p>📞 +91 9080824626</p>
          <p>🌐 xenfirm.com</p>
        </div>
        <p className="footer-address">📍 Vivekanand Nagar, Thoraipakkam, OMR, Chennai</p>
      </div>
    </div>
  );
}
