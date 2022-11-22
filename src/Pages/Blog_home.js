import React from "react";
import { Link } from "react-router-dom"; 

const Blog_home = () => {
    return ( 
<React.StrictMode>
<div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Blogs</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Blogs Topics
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                      <a href="/react-hooks" >
                  <div className="col-md-3 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/React_hooks.gif"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-anchor service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>React JS Hooks</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        React hooks are introduced in version 16.8 which is
                          the recent Update in the react programming...
                        </p>
                      </div>
                    </div>
                  </div>
                  </a>
                <a href="/Advance_react" >
                  <div className="col-md-3 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/Advanced_React.gif"
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-globe exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Advanced React</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        React is not a framework. It is just a library developed by Facebook to solve some 
                        problems that we were ....
                        </p>
                      </div>
                    </div>
                  </div>
                  </a>
                  <a href="/ReactRedux">
                  <div className="col-md-3 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/Redux.gif"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-wrench service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Redux Toolkit</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        Simple. Includes utilities to simplify common use cases like store setup,
                        immutable update logic, and more...
                        </p>
                      </div>
                    </div>
                  </div>
                  </a>
                  <a href="/ui-ux">
                  <div className="col-md-3 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/Ui.gif"
                          alt="mobile-friendly"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-picture-o exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Importance of UI/UX</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        ReactJS/NodeJS and Web Components everything else
                      accomplished on my spare software development time.
                        </p>
                      </div>
                    </div>
                  </div>
                  </a>
                  {/* <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/website-audit2.gif"
                          alt="website-audit"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-tablet exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Backend Resource</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        Coding the backend of an eCommerce application is a step that has to be performed with precision.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/Blogging1.gif"
                          alt="content-management"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-file exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Content Management</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Custom theme and plugin development. Easily update
                          site content with knowledge of powerful code.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
</React.StrictMode>
    );
};
export default Blog_home;