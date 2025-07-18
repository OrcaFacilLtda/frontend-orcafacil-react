import React from "react";
import ContactUsStyle from "./ContactUs.Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <ContactUsStyle.Wrapper>
      <ContactUsStyle.Section>
        <ContactUsStyle.Title>Fale conosco</ContactUsStyle.Title>

        <ContactUsStyle.InfoBox>
          <ContactUsStyle.IconCircle>
            <FontAwesomeIcon icon={faPhone} />
          </ContactUsStyle.IconCircle>
          <ContactUsStyle.InfoText>
            <ContactUsStyle.Label>Telefone</ContactUsStyle.Label>
            <ContactUsStyle.Value>(11) 99999-9999</ContactUsStyle.Value>
          </ContactUsStyle.InfoText>
        </ContactUsStyle.InfoBox>

        <ContactUsStyle.InfoBox>
          <ContactUsStyle.IconCircle>
            <FontAwesomeIcon icon={faEnvelope} />
          </ContactUsStyle.IconCircle>
          <ContactUsStyle.InfoText>
            <ContactUsStyle.Label>E-mail</ContactUsStyle.Label>
            <ContactUsStyle.Value>contato@orcafacil.com.br</ContactUsStyle.Value>
          </ContactUsStyle.InfoText>
        </ContactUsStyle.InfoBox>

        <ContactUsStyle.InfoBox>
          <ContactUsStyle.IconCircle>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </ContactUsStyle.IconCircle>
          <ContactUsStyle.InfoText>
            <ContactUsStyle.Label>Endereço</ContactUsStyle.Label>
            <ContactUsStyle.Value>Rua José Maria Lisboa, 1234 – Jardim Paulista, São Paulo – SP, 01423-000</ContactUsStyle.Value>
          </ContactUsStyle.InfoText>
        </ContactUsStyle.InfoBox>
      </ContactUsStyle.Section>

      <ContactUsStyle.Section>
        <ContactUsStyle.Title>Deixe seu feedback</ContactUsStyle.Title>

        <ContactUsStyle.Form>
          <ContactUsStyle.Input type="text" placeholder="Nome" />
          <ContactUsStyle.Input type="email" placeholder="E-mail" />
          <ContactUsStyle.TextArea rows="4" placeholder="Mensagem" />
          <ContactUsStyle.Button type="submit">Enviar Mensagem</ContactUsStyle.Button>
        </ContactUsStyle.Form>
      </ContactUsStyle.Section>
    </ContactUsStyle.Wrapper>
  );
};

export default ContactUs;
