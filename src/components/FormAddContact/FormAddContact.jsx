import styles from '../FormAddContact/FormAddContacts.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

const InitialFormData = { name: '', number: '' };

export class FormAddContact extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  reset() {
    this.setState({ ...InitialFormData });
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.addNewContact(this.state.name, this.state.number);
    this.reset();
  };
  
  render() {
    return (
      <form onSubmit={this.onSubmit} className={styles.formContacts}>
        <div className={styles.formItem}>
          <h3 className={styles.formTitle}>Name</h3>
          <input
            onChange={this.handleInput}
            className={styles.formInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={styles.formItem}>
          <h3 className={styles.formTitle}>Number</h3>
          <input
            onChange={this.handleInput}
            className={styles.formInput}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className={styles.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
