import React from "react";
import Box from '@mui/material/Box';


const Blog5 = () => {
  return (
    <React.StrictMode>
        {/* <div id="blog">
        <div className="blog-content">
          <div className="blog-grid">
        <div className="col-xl-9 col-lg-9 col-md-12 col-xs-12 col-sm-12">
                    <div className="blog-main">
                    <div class="container"  style = {{bgcolor: 'background.default', color: 'text.primary'}}>
              <div class="row">
                <div class="col-md-12">
                      <img
                        src="assets/img/blog-details/ui-ux1.jpg"
                        alt="The importance of UI/UX"
                        class="blog-img"
                      />
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div> */}
      <div id="blog">
  <Box sx={{bgcolor: 'background.default',color: 'text.primary' }}>
        <div className="blog-content">
          <div className="blog-grid">
            <div class="container"  style = {{bgcolor: 'background.default', color: 'text.primary'}}>
              <div class="row">
                <div class="col-md-12">
                  <Box sx={{bgcolor: 'background.default',color: 'text.primary', marginTop:"150px", marginBottom:"330px"}}>
                  <div style={{ marginTop: "30px"}}>
                  <img
                          src="assets/img/blog-details/123.jpg"
                          alt="Hooks are the most valuable things in react"
                          class="blog-img"
                        />  
                  </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Box>
      </div>
    </React.StrictMode>
  );
};

export default Blog5;
