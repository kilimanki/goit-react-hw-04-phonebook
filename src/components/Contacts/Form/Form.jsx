import { useState } from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';
const INITIAL_STATE = {
  name: '',
  number: '',
};
const Form = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState(INITIAL_STATE);
  };
  const { name, number } = state;
  return (
    <>
      <h3>Phonebook</h3>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.item}>
          Name
          <input
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>

        <label className={css.item}>
          <p>Number</p>
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>

        <button className={css.btn}>Add contact</button>
      </form>
    </>
  );
};
// class Form extends Component {
//   state = { name: '', number: '' };
//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };
// handleSubmit = e => {
//   e.preventDefault();
//   const { onSubmit } = this.props;
//   onSubmit({ ...this.state });
//   this.reset();
// };
// reset = () => {
//   this.setState({
//     name: '',
//     number: '',
//   });
// };

//   render() {
// const { name, number } = this.state;
// return (
//   <>
//     <h3>Phonebook</h3>
//     <form onSubmit={this.handleSubmit} className={css.form}>
//       <label className={css.item}>
//         Name
//         <input
//           value={name}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={this.handleChange}
//         />
//       </label>

//       <label className={css.item}>
//         <p>Number</p>
//         <input
//           value={number}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           onChange={this.handleChange}
//         />
//       </label>

//       <button className={css.btn}>Add contact</button>
//     </form>
//   </>
// );
//   }
// }
export default Form;
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
