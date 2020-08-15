import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';
import Select from '../../components/Select';

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
        <Select
            name="subject"
            label="Matéria"
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Artes', label: 'Biologia'},
              {value: 'Artes', label: 'Ciências'},
              {value: 'Artes', label: 'Geografia'},
              {value: 'Artes', label: 'História'},
              {value: 'Artes', label: 'Português'},
              {value: 'Artes', label: 'Química'}
            ]}
            required
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda'},
              {value: '2', label: 'Terça'},
              {value: '3', label: 'Quarta'},
              {value: '4', label: 'Quinta'},
              {value: '5', label: 'Sexta'},
              {value: '6', label: 'Sábado'}
            ]}
            required
          />
          <Input
            name="time"
            label="Horário"
            type="time"
            required
          />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;