import PropTypes from 'prop-types';
export const List = ({ items, onclick }) => {
  const elements = items.map(item => {
    return (
      <li key={item.id}>
        <span>{item.name}:</span>
        <span>{item.number}</span>
        <button onClick={() => onclick(item.id)}>Delete</button>
      </li>
    );
  });

  return <ul>{elements}</ul>;
};
List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onclick: PropTypes.func.isRequired,
};
