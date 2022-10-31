import styles from './filter.module.css';

//custom function type for onchange event
type onChangeProps = {
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function filter({
  handleFilterChange,
  handleSortChange,
}: {
  handleFilterChange: onChangeProps;
  handleSortChange: onChangeProps;
}) {
  return (
    <>
      <form method='post' action='' className={styles.form}>
        {/* <label className={styles.label}>Username</label> */}
        <input
          className={styles.input}
          type='text'
          id='food'
          name='food'
          placeholder='Filter by name..'
          onChange={(event) => handleFilterChange(event.target.value)}
          required
        />
      </form>
      <div className={styles.sortByRating}>
        <select onChange={(event) => handleSortChange(event.target.value)}>
          <option value=''>Sort by rating</option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
    </>
  );
}
