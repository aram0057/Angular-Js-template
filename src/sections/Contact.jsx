const Contact = () => {
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container text-center">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            Feel free to reach out to me through any of the channels below.
          </p>

          <div className="contact-details mt-12">
            <div className="contact-item">
              <span className="field-label">Email:</span>
              <p className="text-lg text-white-600">your-email@example.com</p>
            </div>

            <div className="contact-item">
              <span className="field-label">Phone:</span>
              <p className="text-lg text-white-600">+1 (234) 567-8901</p>
            </div>

            <div className="contact-item">
              <span className="field-label">LinkedIn:</span>
              <p className="text-lg text-white-600">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  linkedin.com/in/your-profile
                </a>
              </p>
            </div>

            <div className="contact-item">
              <span className="field-label">GitHub:</span>
              <p className="text-lg text-white-600">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  github.com/your-username
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
