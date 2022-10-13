import styles from '../ListContacts/ListContacts.module.css';
import PropTypes from 'prop-types';
import { ItemContacts } from './ItemContacts/ItemContacts';

export const ListContacts = ({ contacts, filter, userDelete }) => {
  return (
    <ul className={styles.ListContacts}>
      <ItemContacts
        contacts={contacts}
        filter={filter}
        userDelete={userDelete}
      />
    </ul>
  );
};
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  userDelete: PropTypes.func.isRequired,
};
