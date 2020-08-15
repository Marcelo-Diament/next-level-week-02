import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

const TeacherForm = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher este formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome" required />
          <Input name="avatar" label="Avatar" required />
          <Input name="whatsapp" label="Whatsapp" required />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Ciências', label: 'Ciências'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'História', label: 'História'},
              {value: 'Português', label: 'Português'},
              {value: 'Química', label: 'Química'}
            ]}
            required
          />
          <Input name="cost" label="Custo hora/aula" required />
        </fieldset>
        <fieldset>
          <legend>Horários Disponíveis</legend>
          <Input name="name" label="Nome" required />
          <Input name="avatar" label="Avatar" required />
          <Input name="whatsapp" label="Whatsapp" required />
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Importante!<br />Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;