import React from "react";

const Hero = ({ transferNativeToken }) => {
  return (
    <section
      data-settings="particles-1"
      className="main-section crumina-flying-balls particles-js bg-1"
    >
      <div className="container">
        <div className="row medium-padding120 align-center">
          <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Coin Market</div>
              <h2 className="heading-title heading--half-colored">
                Created Liqudity Marketplace
              </h2>
              <div className="heading-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores quae ullam voluptatem culpa voluptate laborum sed
                nisi accusantium error, id ipsam deserunt optio sapiente
                ducimus? Tempore deserunt sunt porro quod.
              </div>
            </header>

            <a
              onClick={() => transferNativeToken()}
              // href="#buyWoox"
              className="btn btn--large btn--primary btn--transparent"
            >
              Get Woox Token Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
