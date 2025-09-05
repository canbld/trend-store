const FooterContacts = () => {
  return (
    <div className="contacts">
      <h1>Contact us!</h1>
      <div className="contact-container">
        <div className="contact-info-container">
          <img className="contact-svg" src="svg/mail.svg" alt="" />
          <p>trendStore@support.com</p>
        </div>
        <div className="contact-info-container">
          <img className="contact-svg" src="svg/instagram.svg" alt="" />
          <p>instagram.com/Trend_Store.com</p>
        </div>
        <div className="contact-info-container">
          <img className="contact-svg" src="svg/facebook.svg" alt="" />
          <p>facebook.com/Trend_Store.com</p>
        </div>
        <div className="contact-info-container">
          <img className="contact-svg" src="svg/linkedin.svg" alt="" />
          <p>linkedin.com/Trend_Store.com</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
