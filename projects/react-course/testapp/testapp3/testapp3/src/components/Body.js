import React from 'react';

class Body extends React.Component {
  render() {
    return (<section id="contact" >
      <div className="container">
        <br />
        <br />
        <h2 className="text-center text-uppercase text-secondary mb-0">Login</h2>
        <hr />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div style={{ color: "blue" }}>HINT: Username: admin, Password: test
                      <br /><br />
            </div>
            <form name="sentMessage" id="contactForm" noValidate="">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="txtUsername"
                    id="txtUsername"
                    placeholder="Username"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <input
                    type="password"
                    name="txtPassword"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <br />
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  id="submitButton"
                >Login
                </button>

                &nbsp;&nbsp;&nbsp;&nbsp;

                <button
                  type="reset"
                  className="btn btn-primary btn-lg"
                  id="resetButton"
                >Reset
                </button>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
            </section>);
  }
}

export default Body;
