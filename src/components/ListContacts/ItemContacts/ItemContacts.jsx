import styles from '../ItemContacts/ItemContacts.module.css';
import PropTypes from 'prop-types';

export const ItemContacts = ({ contacts, filter, userDelete }) => {
  return (
    <>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(user => (
          <li key={user.id} id={user.id} className={styles.listItem}>
            <p className={styles.itemText}>
              {user.name}: {user.number}
            </p>
            <button
              className={styles.itemBtn}
              type="button"
              value={user.id}
              onClick={userDelete}
            >
              &#215;
            </button>
          </li>
        ))}
    </>
  );
};
ItemContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  userDelete: PropTypes.func.isRequired,
};
