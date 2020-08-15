import React from 'react';
import api from '../../services/api';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export interface Teacher {
  id: number,
  avatar: string,
  bio: string,
  cost: number,
  name: string,
  subject: string,
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} target="_blank" href={`href="https://wa.me/${teacher.whatsapp}?text=Olá%20${teacher.name},%0D%0A%0D%0AAcessei%20o%20site%20Proffy%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20auls%20de%20${teacher.subject}%0D%0A"`}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
