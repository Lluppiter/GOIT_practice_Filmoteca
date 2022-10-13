import styles from '../FilterContacts/Filter.module.css';
import PropTypes from 'prop-types';

export const Input = ({ handleInput }) => {
  return (
    <div className={styles.filter}>
      <p className={styles.filterTxt}>Find contacts by name</p>
      <input
        className={styles.filterInput}
        name="filter"
        onChange={handleInput}
      />
    </div>
  );
};
Input.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
