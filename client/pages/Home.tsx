import ButtonLink from "../components/inputs/ButtonLink";
import { ReactElement } from "react";
import Icon from "../components/Icon";
import { Col, Row } from "../components/Layout";

const Home = (): ReactElement => {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="tagline">
          <h1>PERFECTION IN SIMPLICITY</h1>
          <p>
            AQUALINK produces and delivers quality products aimed at the fish farming industry with high quality
            materials and minimal strain on the environment.
          </p>
          <ButtonLink to="/products">View products</ButtonLink>
        </div>
        <div className="journey">
          <Row justify="between" align="center">
            <>
              <Row align="center">
                <>
                  <Icon name="envelope" size="2x" className="leftAlign" />
                  <p>Need more information or have other enquiries?</p>
                </>
              </Row>
              <ButtonLink to="/contact" className="bottomAlign">
                Get in touch
              </ButtonLink>
            </>
          </Row>
        </div>
        <div className="about-summary">
          <Col>
            <>
              <Icon name="anchor" size="2x" className="leftAlign" />
              <Col>
                <>
                  <p>
                    Through a close collaboration with customers and suppliers, we have gained a knowledge base within
                    the aquaculture industry that led to the foundation for the establishment of Aqualink.
                  </p>
                  <p>
                    From the start, we have focused on the elementary parts of an industry that has undergone major
                    changes in the past 10-15 years.
                  </p>
                  <p>A constant focus on safety and new development has led to creative innovations.</p>
                </>
              </Col>
              <ButtonLink to="/about" className="rightAlign">
                Learn more
              </ButtonLink>
            </>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Home;
