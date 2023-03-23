import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="hero min-h-screen bg-gray-700">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-700">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered bg-gray-600" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered bg-gray-600" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Your Message</span>
                </label>
                <textarea
                  name=""
                  value="Your message"
                  className="input input-bordered bg-gray-600 text-white"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
