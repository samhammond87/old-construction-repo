import React from 'react';
// import Icon1 from "../../images/svg-4.png";
// import Icon2 from "../../images/svg-5.png";
// import Icon3 from "../../images/svg-6.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';
import { Spring } from 'react-spring/renderprops';

const Services = () => {
  return (
    <ServicesContainer id='whyus'>
      <Spring
        from={{ opacity: 0, marginTop: 1000 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 5000, duration: 2000 }}
      >
        {(props) => (
          <div style={props}>
            <ServicesH1>Why us?</ServicesH1>
          </div>
        )}
      </Spring>
      <ServicesWrapper>
        <Spring
          from={{ opacity: 0, marginTop: 1000 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 5000, duration: 2000 }}
        >
          {(props) => (
            <div style={props}>
              <ServicesCard>
                {/* <ServicesIcon src={Icon1} /> */}
                <ServicesIcon src='https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/svg-4.png' />
                <ServicesH2>Fast & Effective Services</ServicesH2>
                <ServicesP>
                  We have the experience & resources to make the project run
                  smoothly. We can ensure a job is done on time.
                </ServicesP>
              </ServicesCard>
            </div>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, marginTop: 1000 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 5000, duration: 2000 }}
        >
          {(props) => (
            <div style={props}>
              <ServicesCard>
                {/* <ServicesIcon src={Icon2} /> */}
                <ServicesIcon src='https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/svg-5.png' />
                <ServicesH2>Value For Money</ServicesH2>
                <ServicesP>
                  Competitive price with excellent customer service (quick
                  return and good quality) is our strength point.
                </ServicesP>
              </ServicesCard>
            </div>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, marginTop: 1000 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 5000, duration: 2000 }}
        >
          {(props) => (
            <div style={props}>
              <ServicesCard>
                {/* <ServicesIcon src={Icon3} /> */}
                <ServicesIcon src='https://full-stack-app.s3-ap-southeast-2.amazonaws.com/images/svg-6.png' />
                <ServicesH2>Customer Satisfaction</ServicesH2>
                <ServicesP>
                  We will do everything possible, use the necessary resources to
                  solve all the issues on hand.
                </ServicesP>
              </ServicesCard>
            </div>
          )}
        </Spring>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
