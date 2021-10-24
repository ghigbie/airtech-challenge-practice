import {useState} from 'react';

const AddOption = (props) => {
    const [error, setError] = useState(undefined);

    const handleAddOption = (e) => {
        e.preventDefault();
        const optionToAdd = e.target.elements.option.value.trim()
        const error = props.handleAddOption(optionToAdd);
        e.target.elements.option.value = '';
        setError(error);
    }

    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleAddOption}> 
            <input type="text" name="option" placeholder="Add option text here"/>
            <input type="submit" value="Add Option" />
        </form>
      </div>
    );
}

export default AddOption;
