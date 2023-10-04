import Header from "../../components/header/Header";
import "./contact.css";

const Contact = () => {
  return (
    <>
    <Header/>
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p className="contact-item-text">No-67,Avinashi Road, Coimbatore,Tamil Nadu</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone
          </div>
          <p className="contact-item-text">+91 9841230422</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p className="contact-item-text">onlinebookstore@gmail.com</p>
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="text" placeholder="Email *" />
        </div>
        <textarea
          placeholder="Your Message *"
          className="contact-textarea"
          rows="5"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form>
    </section>
    </>
  );
};

export default Contact;
