import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceAreasStyle from './ServicesAreas.Styles.jsx';
import data from './data.js';

function ServiceAreas() {
  return (
    <ServiceAreasStyle.Section>
      <ServiceAreasStyle.TitleWrapper>
        <ServiceAreasStyle.Title>
          Onde os serviços são prestados?
        </ServiceAreasStyle.Title>
      </ServiceAreasStyle.TitleWrapper>

      <ServiceAreasStyle.CardsContainer>
        {data.map((item, index) => (
          <ServiceAreasStyle.Card key={index}>
            <ServiceAreasStyle.IconWrapper>
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </ServiceAreasStyle.IconWrapper>
            <ServiceAreasStyle.Label>{item.label}</ServiceAreasStyle.Label>
          </ServiceAreasStyle.Card>
        ))}
      </ServiceAreasStyle.CardsContainer>
    </ServiceAreasStyle.Section>
  );
}

export default ServiceAreas;
