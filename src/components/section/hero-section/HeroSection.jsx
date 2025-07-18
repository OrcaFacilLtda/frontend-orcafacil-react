import React from 'react';
import StandartImage from '../../../assets/image/standartImage.svg';
import DefaultButton from '../../ui/default-button/Button';
import HeroStyle from './Hero.Style';

function HeroSection() {
  return (
    <>
    <HeroStyle.Container>
      <HeroStyle.Image src={StandartImage} alt="Hero Image" />
      <HeroStyle.Content>
        <HeroStyle.Title>Decisões mais inteligentes começam com bons orçamentos. </HeroStyle.Title>
        <HeroStyle.Description>
          Não feche negócio no escuro — use o OrçaFácil e encontre a melhor opção com confiança.
        </HeroStyle.Description>
          <DefaultButton text="Registre-se já"  variant='outlined' size='xlarge'/>
      </HeroStyle.Content>
    </HeroStyle.Container>
    </>
  );
}

export default HeroSection;
