import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGpLQGpgPAbUg/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=uElzAZ4jfrquyZ_qaEio8X3O6XSzHjMwqep9hzLykVY" alt="Marcelo Diament" />
        <div>
          <strong>Marcelo Diament</strong>
          <span>Programação Web</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt a velit ducimus ipsam, neque inventore beatae numquam consectetur. Dicta repudiandae, esse facilis mollitia voluptas reprehenderit ducimus tempore. Asperiores, temporibus facere.
        <br/><br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi neque obcaecati culpa accusamus velit inventore sed impedit et qui aut esse sapiente soluta, quis id exercitationem, eligendi, totam corrupti possimus?
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em Contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
