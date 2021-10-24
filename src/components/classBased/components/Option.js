const Option = ({optionText, handleDeleteOption}) => (
  <p>
      {optionText}
      <button onClick={() => handleDeleteOption(optionText)}>No Thanks!</button>
  </p>
);

export default Option;