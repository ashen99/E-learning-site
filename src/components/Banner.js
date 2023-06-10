import React from "react";
import "../styles/Banner/Banner.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from '@mui/material/TextField';

const Banner = () => {
  return (
    <>
      <section>
        <div className="container_banner">
          <div className="banner_text">
            <div className="b_texts">
              <h2>Subscribe Newsletter</h2>
              <p>
                You learn today and earn tomorrrow. The roots of education are
                bitter but the fruits are sweet.
              </p>
              <div className="btn_group">
                <div>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
                    <Button>Subscribe</Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
