import React from "react";
import OurStoryStyle from "./OurStory.Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const OurHistory = () => {
  return (
    <OurStoryStyle.Container>
      <OurStoryStyle.Title>NOSSA HISTÓRIA</OurStoryStyle.Title>
      <OurStoryStyle.Divider />
      <OurStoryStyle.Section>
        <OurStoryStyle.Icon>
          <FontAwesomeIcon icon={faCog} />
        </OurStoryStyle.Icon>
        <OurStoryStyle.Subtitle>Um pouco sobre orçaFácil</OurStoryStyle.Subtitle>

        <OurStoryStyle.Paragraph>
          A OrçaFácil é uma plataforma inteligente que revoluciona a forma como usuários encontram e contratam prestadores de serviços.
        </OurStoryStyle.Paragraph>
        <OurStoryStyle.Paragraph>
          Nosso objetivo é simplificar o processo de contratação, promovendo o match ideal entre quem precisa de um serviço e quem está pronto para realizá-lo com qualidade.
        </OurStoryStyle.Paragraph>
        <OurStoryStyle.Paragraph>
          Com poucos cliques, o usuário cadastra sua necessidade — seja uma reforma, um serviço de tecnologia, assistência técnica, limpeza, design, entre outros — e a OrçaFácil se encarrega de conectá-lo aos profissionais mais adequados, de forma rápida, prática e segura.
          Os prestadores, por sua vez, têm acesso a uma base qualificada de clientes em potencial, aumentando suas chances de fechar bons negócios.
        </OurStoryStyle.Paragraph>
        <OurStoryStyle.Paragraph>
          Mais do que uma ponte entre demanda e oferta, a OrçaFácil se diferencia por oferecer:
        </OurStoryStyle.Paragraph>

        <OurStoryStyle.List>
          <OurStoryStyle.ListItem>Avaliações e recomendações de outros clientes, garantindo mais confiança;</OurStoryStyle.ListItem>
          <OurStoryStyle.ListItem>Filtros inteligentes que priorizam localização, preço e reputação;</OurStoryStyle.ListItem>
        </OurStoryStyle.List>

        <OurStoryStyle.Paragraph>
          Acreditamos que contratar um serviço de qualidade não precisa ser complicado. Com a OrçaFácil, você economiza tempo, dinheiro e ainda faz a escolha certa.
        </OurStoryStyle.Paragraph>
      </OurStoryStyle.Section>
    </OurStoryStyle.Container>
  );
};

export default OurHistory;
