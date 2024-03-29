import React from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';
import { Spring } from 'react-spring/renderprops';

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Spring
              from={{ opacity: 0, marginTop: -500 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 2000, duration: 2000 }}
            >
              {(props) => (
                <div style={props}>
                  <Column1>
                    <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightText={lightText}>{headline}</Heading>
                      <Subtitle darkText={darkText}>{description}</Subtitle>
                      <BtnWrap>
                        <Button
                          to='contact'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          primary={primary ? 1 : 0}
                          dark={dark ? 1 : 0}
                          dark2={dark2 ? 1 : 0}
                        >
                          {buttonLabel}
                        </Button>
                      </BtnWrap>
                    </TextWrapper>
                  </Column1>
                </div>
              )}
            </Spring>

            <Spring
              from={{ opacity: 0, marginTop: 500 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 2000, duration: 2000 }}
            >
              {(props) => (
                <div style={props}>
                  <Column2>
                    <ImgWrap>
                      <Img src={img} alt={alt} />
                    </ImgWrap>
                  </Column2>
                </div>
              )}
            </Spring>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
