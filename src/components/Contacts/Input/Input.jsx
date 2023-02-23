import PropTypes from 'prop-types';
export const Input = ({ handleChange, filter }) => {
  return (
    <input type="text" value={filter} name="filter" onChange={handleChange} />
  );
};
Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
// 123
