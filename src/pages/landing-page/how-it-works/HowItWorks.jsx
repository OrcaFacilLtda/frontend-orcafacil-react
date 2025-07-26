import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import howItWorksData from "./data.js";
import HowItWorksStyled from "./HowItWorks.Style.jsx";
import image from "../../../assets/image/constructor.svg"; 
function HowItWorks() {
  return (
    <HowItWorksStyled.Section>
      <HowItWorksStyled.Title>Como funciona nossa aplicação?</HowItWorksStyled.Title>

      <HowItWorksStyled.Content>
        <HowItWorksStyled.Side>
          {howItWorksData.left.map((item, index) => (
            <HowItWorksStyled.Item key={index}>
              <HowItWorksStyled.Icon>
                <FontAwesomeIcon icon={item.icon} />
              </HowItWorksStyled.Icon>
              <HowItWorksStyled.Texts>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </HowItWorksStyled.Texts>
            </HowItWorksStyled.Item>
          ))}
        </HowItWorksStyled.Side>

        <HowItWorksStyled.ImageWrapper>
          <HowItWorksStyled.Image
            src={image}
            alt="Homem com capacete segurando prancheta"
          />
        </HowItWorksStyled.ImageWrapper>

        <HowItWorksStyled.Side>
          {howItWorksData.right.map((item, index) => (
            <HowItWorksStyled.Item key={index}>
              <HowItWorksStyled.Icon>
                <FontAwesomeIcon icon={item.icon} />
              </HowItWorksStyled.Icon>
              <HowItWorksStyled.Texts>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </HowItWorksStyled.Texts>
            </HowItWorksStyled.Item>
          ))}
        </HowItWorksStyled.Side>
      </HowItWorksStyled.Content>
    </HowItWorksStyled.Section>
  );
}

export default HowItWorks;
