import React from "react";

function Contact() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-16 px-6 md:px-20 lg:px-30 gap-10" id="contact">
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4045673256455!2d72.51250407436834!3d23.04562491546931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f8ee324da2af39%3A0xf04a9f002154b683!2sAbtik%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1758701765605!5m2!1sen!2sin"
          className="w-full  h-116"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className="space-y-3 flex flex-col justify-center">
        <header>
          <h1 className="sub-heading-1">Contact Us</h1>
          <h2 className="heading-2">Write Message</h2>
        </header>
        <form className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-3  ">
            <div className="">
              <input
                placeholder="Name"
                className="text-[#878680] w-full  border px-3 py-3 rounded-md"
              />
            </div>
            <div className="">
              <input
                placeholder="Email"
                className="text-[#878680] w-full border px-3 py-3 rounded-md"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="text-[#878680] resize-none w-full px-3 border py-3 rounded-md max-h-full overflow-y-auto"
              
              rows={4}
            ></textarea>
          </div>
          <div>
            <button className="primary-button">Send a Message</button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Contact;
