import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { getFilter, changeFilter } from '../../redux/contacts';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.Filter}>
      <label className={styles.Filter__label}>
        Find contacts by name:
        <input
          className={styles.Filter__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string,
  onChangeFilter: propTypes.func,
};

export default Filter;
