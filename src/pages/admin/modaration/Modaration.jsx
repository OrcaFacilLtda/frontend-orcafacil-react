import React from 'react';
import ModerationStyle from './Moderation.Style.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHeadset, faFlag } from '@fortawesome/free-solid-svg-icons';

export default function Moderation() {
    return (
        <ModerationStyle.Container>
            <ModerationStyle.Header>
                <h3>Moderação e Suporte</h3>
                <p>Gerencie denúncias, avaliações e tickets de suporte</p>
            </ModerationStyle.Header>

            <ModerationStyle.InfoCards>
                <ModerationStyle.Card color="#e74c3c" numberColor="#e74c3c" bg="#fddede">
                    <div>
                        Denúncias Pendentes <span>12</span>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                    </div>
                </ModerationStyle.Card>

                <ModerationStyle.Card color="#f39c12" numberColor="#f39c12" bg="#fff3cd">
                    <div>
                        Tickets Abertos <span>8</span>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faHeadset} />
                    </div>
                </ModerationStyle.Card>

                <ModerationStyle.Card color="#8e44ad" numberColor="#8e44ad" bg="#e8d7ff">
                    <div>
                        Tickets Resolvidos na Semana <span>3</span>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faFlag} />
                    </div>
                </ModerationStyle.Card>
            </ModerationStyle.InfoCards>

            <ModerationStyle.Sections>
                <ModerationStyle.Section>
                    <ModerationStyle.SectionHeader>
                        <h2>Denúncias Recentes</h2>
                        <input placeholder="Número do chamado" type="text" />
                    </ModerationStyle.SectionHeader>

                    <ModerationStyle.ReportCard bg="#fddede" color="#c0392b" timeColor="#c0392b">
                        <small>Há 2 horas</small>
                        <strong>Conduta Inadequada - #12244</strong>
                        <p>Prestador foi grosseiro durante o atendimento</p>
                        <ModerationStyle.ButtonsWrapper>
                            <button className="analyze">Analisar</button>
                            <button className="reject">Rejeitar</button>
                        </ModerationStyle.ButtonsWrapper>
                    </ModerationStyle.ReportCard>

                    <ModerationStyle.ReportCard bg="#fddede" color="#c0392b" timeColor="#c0392b">
                        <small>Há 2 horas</small>
                        <strong>Conduta Inadequada - #12245</strong>
                        <p>Prestador foi grosseiro durante o atendimento</p>
                        <ModerationStyle.ButtonsWrapper>
                            <button>Analisar</button>
                            <button>Rejeitar</button>
                        </ModerationStyle.ButtonsWrapper>
                    </ModerationStyle.ReportCard>
                </ModerationStyle.Section>

                <ModerationStyle.Section>
                    <h2>Tickets Resolvidos ou Arquivados</h2>
                    <ModerationStyle.SectionHeader>
                        <input placeholder="Número do chamado" type="text" />
                    </ModerationStyle.SectionHeader>

                    <ModerationStyle.ReportCard border="1px solid #27ae60" color="#27ae60">
                        <strong>Conduta Inadequada - #12247</strong>
                        <p>Prestador foi grosseiro durante o atendimento</p>
                        <ModerationStyle.ButtonsWrapper>
                            <button className="review">Revisar</button>
                            <button className="reject">Rejeitar</button>
                        </ModerationStyle.ButtonsWrapper>
                    </ModerationStyle.ReportCard>

                    <ModerationStyle.ReportCard border="1px solid #27ae60" color="#27ae60">
                        <strong>Conduta Inadequada - #12246</strong>
                        <p>Prestador foi grosseiro durante o atendimento</p>
                        <ModerationStyle.ButtonsWrapper>
                            <button>Revisar</button>
                            <button>Rejeitar</button>
                        </ModerationStyle.ButtonsWrapper>
                    </ModerationStyle.ReportCard>

                    <ModerationStyle.ReportCard border="1px solid #27ae60" color="#27ae60">
                        <strong>Conduta Inadequada - Criado por: Thiago de Sá</strong>
                        <p>Prestador foi grosseiro durante o atendimento</p>
                        <ModerationStyle.ButtonsWrapper>
                            <button>Revisar</button>
                            <button>Rejeitar</button>
                        </ModerationStyle.ButtonsWrapper>
                    </ModerationStyle.ReportCard>
                </ModerationStyle.Section>
            </ModerationStyle.Sections>
        </ModerationStyle.Container>
    );
}
