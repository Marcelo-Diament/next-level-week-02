import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';

const TeacherList = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <Input
            name="subject"
            label="Matéria"
            required
          />
          <Input
            name="week_day"
            label="Dia da Semana"
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