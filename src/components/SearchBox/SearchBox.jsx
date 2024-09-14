import s from "./SearchBox.module.css";

const SearchBox = ({ searchValue, onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };
  return (
    <div className={s.container}>
      <label htmlFor="searchInput">
        <span>Find contacts by name</span>
        <input
          type="text"
          id="searchInput"
          value={searchValue}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
