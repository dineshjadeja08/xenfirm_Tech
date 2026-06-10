import { useParams, useNavigate } from 'react-router-dom';
import { certificates } from '../data/certificates';
import './CertificateVerification.css';

export default function CertificateVerification() {
  const { certificateId } = useParams();
  const navigate = useNavigate();
  const certificate = certificates[certificateId];

  if (!certificate) {
    return (
      <div className="verification-container not-found">
        <div className="verification-card error-card">
          <div className="not-found-content">
            <div className="error-icon">❌</div>
            <h1>Certificate Not Found</h1>
            <p>This certificate is not registered with XenFirm Technologies.</p>
            <div className="error-details">
              <p className="certificate-id-display">ID: <strong>{certificateId}</strong></p>
            </div>
            <button 
              className="btn-verify-another"
              onClick={() => navigate('/verify')}
            >
              Verify Another Certificate
            </button>
          </div>

          {/* Company Footer */}
          <div className="company-footer">
            <h3>XenFirm Technologies</h3>
            <p>📧 hello@xenfirm.com</p>
            <p>📞 +91 9080824626</p>
            <p>🌐 xenfirm.com</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="verification-container">
      {/* Header Section */}
      <div className="verification-header">
        <div className="xenfirm-branding">
          <img src="/assets/img/xenfirm_logo_1775124922169.png" alt="XenFirm Technologies" />
          <h1 className="xenfirm-title">XenFirm</h1>
        </div>
      </div>

      {/* Main Verification Card */}
      <div className="verification-card success-card">
        {/* Verification Badge */}
        <div className="verification-badge">
          <div className="badge-circle">
            <span className="badge-check">✅</span>
          </div>
          <p className="badge-text">Certificate Verified</p>
        </div>

        {/* Certificate Details */}
        <div className="certificate-details">
          {/* Candidate Information Section */}
          <div className="details-section">
            <h2 className="section-title">📋 Candidate Information</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Candidate Name</span>
                <span className="detail-value">{certificate.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender</span>
                <span className="detail-value">{certificate.gender}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{certificate.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Mobile</span>
                <span className="detail-value">{certificate.mobile}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Address</span>
                <span className="detail-value">{certificate.address}</span>
              </div>
            </div>
          </div>

          {/* Academic Information Section */}
          <div className="details-section">
            <h2 className="section-title">🎓 Academic Information</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">College</span>
                <span className="detail-value">{certificate.college}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Course</span>
                <span className="detail-value">{certificate.course}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Year</span>
                <span className="detail-value">{certificate.year}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Register Number</span>
                <span className="detail-value">{certificate.registerNumber}</span>
              </div>
            </div>
          </div>

          {/* Internship Information Section */}
          <div className="details-section">
            <h2 className="section-title">💼 Internship Information</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Internship Role</span>
                <span className="detail-value">{certificate.role}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Mode</span>
                <span className="detail-value">{certificate.internshipMode}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Start Date</span>
                <span className="detail-value">{certificate.startDate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">End Date</span>
                <span className="detail-value">{certificate.endDate}</span>
              </div>
            </div>
          </div>

          {/* Issue Information Section */}
          <div className="details-section">
            <h2 className="section-title">📜 Issue Information</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Certificate ID</span>
                <span className="detail-value certificate-id">{certificate.certificateId}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Issue Date</span>
                <span className="detail-value">{certificate.issueDate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="detail-value status-badge">{certificate.status}</span>
              </div>
            </div>
          </div>

          {/* Authority Information Section */}
          <div className="details-section">
            <h2 className="section-title">🏢 Company Information</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Company</span>
                <span className="detail-value">XenFirm Technologies</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Issued By</span>
                <span className="detail-value">{certificate.issuedBy}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Designation</span>
                <span className="detail-value">{certificate.designation}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Contact</span>
                <span className="detail-value">hello@xenfirm.com | +91 9080824626</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            className="btn-verify-another"
            onClick={() => navigate('/verify')}
          >
            Verify Another Certificate
          </button>
        </div>
      </div>

      {/* Company Footer */}
      <div className="company-footer">
        <h3>XenFirm Technologies</h3>
        <p>📧 hello@xenfirm.com</p>
        <p>📞 +91 9080824626</p>
        <p>🌐 xenfirm.com</p>
        <p className="address">📍 Vivekanand Nagar, Thoraipakkam, OMR, Chennai</p>
      </div>
    </div>
  );
}
