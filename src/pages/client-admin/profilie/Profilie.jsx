import React from 'react';
import ProfileStyle from './Profilie.Style.jsx';
import Input from '../../../components/ui/general-input/GeneralInput.jsx';

const Profile = ({ isClient }) => {
    return (
        <ProfileStyle.Container>
            <h2>Editar usuário:</h2>

            <ProfileStyle.Form>
                <ProfileStyle.Column>
                    <Input label="Nome Usuário:" placeholder="Nome" />
                    <Input label="Email:" placeholder="Descrição" />
                    <Input label="Telefone:" />
                    <Input label="CPF:" />

                    {!isClient && <Input label="CNPJ:" />}

                    {!isClient && (
                        <ProfileStyle.SelectWrapper>
                            <label>Função:</label>
                            <ProfileStyle.Select>
                                <option value="">Selecione</option>
                                <option value="eletricista">Eletricista</option>
                                <option value="encanador">Encanador</option>
                                <option value="marceneiro">Marceneiro</option>
                            </ProfileStyle.Select>
                        </ProfileStyle.SelectWrapper>
                    )}

                    <ProfileStyle.SelectWrapper>
                        <label>UF:</label>
                        <ProfileStyle.Select>
                            <option value="">Selecione</option>
                            <option value="SP">SP</option>
                            <option value="RJ">RJ</option>
                        </ProfileStyle.Select>
                    </ProfileStyle.SelectWrapper>

                    {!isClient && (
                        <ProfileStyle.SelectWrapper>
                            <label>Breve biografia:</label>
                            <ProfileStyle.TextArea placeholder="Digite sua biografia..." />
                        </ProfileStyle.SelectWrapper>
                    )}
                </ProfileStyle.Column>

                <ProfileStyle.Column>
                    <Input label="Cidade:" />
                    <Input label="Rua:" />
                    <Input label="Bairro:" />
                    <Input label="CEP:" />
                    <Input label="Senha Atual:" />
                    <Input label="Senha:" />
                </ProfileStyle.Column>
            </ProfileStyle.Form>

            <ProfileStyle.ButtonsWrapper>
                <button disabled>Apagar usuário</button>
                <button className="primary">Editar</button>
            </ProfileStyle.ButtonsWrapper>
        </ProfileStyle.Container>
    );
};

export default Profile;
