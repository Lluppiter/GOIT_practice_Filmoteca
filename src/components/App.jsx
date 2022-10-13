import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Input } from './FilterContacts/Filter';

const LS_KEY = 'Contacts'
const contactsFromLS = localStorage.getItem(LS_KEY)
const parsedContactsFromLS = JSON.parse(contactsFromLS)

const contactsFromStart = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]


export class App extends Component {
  state = {
    contacts: parsedContactsFromLS ? parsedContactsFromLS : contactsFromStart,
    filter: '',
  };



  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  addNewContact = (name, number) => {
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    const overlap = this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() &&
        contact.number.toLowerCase() === newContact.number.toLowerCase()
    );
    overlap.length === 0
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }))
      : alert('This contact has been added');
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.value
      ),
    }));
  };

  componentDidUpdate() { 
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts))
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <FormAddContact
            addNewContact={this.addNewContact}
            handleInput={this.handleInput}
          />
        </Section>
        <Section title="Contacts">
          <Input handleInput={this.handleInput} />
          <ListContacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            userDelete={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
