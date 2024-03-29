import { PencilLine } from '@phosphor-icons/react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        alt=''
        src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
      />

      <div className={styles.profile}>
        <Avatar src='https://github.com/iury-sousa.png' />
        <strong>Iury Sousa</strong>
        <span>Web Development</span>
      </div>

      <footer>
        <a href='?'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
