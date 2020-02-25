import React from 'react';
import { useSelector } from 'react-redux';

import { Form } from '@unform/web';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <input name="name" placeholder="Nome completo" />
        <input name="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <input type="password" name="oldPassword" placeholder="Senha atual" />
        <input type="password" name="password" placeholder="Nova senha" />
        <input
          type="confirmPassword"
          name="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
