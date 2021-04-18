 <div className="container">
        <h2 className="text-uppercase text-center text-secondary mb-0">
          Contact Me
        </h2>
        {/* <hr className="star-dark mb-5" /> */}
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    required
                    placeholder="Name"
                  />
                  <small className="form-text text-danger help-block" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                    placeholder="Email Address"
                  />
                  <small className="form-text text-danger help-block" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Phone Number</label>
                  <input
                    className="form-control"
                    type="tel"
                    id="phone"
                    required
                    placeholder="Phone Number"
                  />
                  <small className="form-text text-danger help-block" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-5 pb-2">
                  <textarea
                    className="form-control"
                    id="message"
                    required
                    placeholder="Message"
                    rows={5}
                    defaultValue={""}
                  />
                  <small className="form-text text-danger help-block" />
                </div>
              </div>
              <div id="success" />
              <div className="text-center form-group">
                <button
                  className="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>