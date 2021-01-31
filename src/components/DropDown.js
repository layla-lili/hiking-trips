const DropDown = (props) => {
  return (
    <select onChange={props.handleChange}>
      <option value="">--Please choose a difficulty--</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
  );
};

export default DropDown;
