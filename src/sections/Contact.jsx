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
              <span className="field-label text-blue-500">Email:</span>
              <p className="text-lg text-white-600">abbishek_kamak@outlook.com</p>
            </div>

            <div className="contact-item">
              <span className="field-label text-blue-500">Phone:</span>
              <p className="text-lg text-white-600">+61412037315</p>
            </div>

            <div className="contact-item">
              <span className="field-label"></span>
              <p className="text-lg text-white-600">
                <a href="http://www.linkedin.com/in/abbishekkamak" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="inline-block h-6 w-6" />
                </a>
              </p>
            </div>

            <div className="contact-item">
              <span className="field-label"></span>
              <p className="text-lg text-white-600">
                <a href="https://github.com/aram0057" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Click here to view my github
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
