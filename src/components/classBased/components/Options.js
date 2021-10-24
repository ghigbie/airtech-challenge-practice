import Option from "./Option";
import RemoveAll from "./RemoveAll";

const GetStared = () => (<p>Please add option to get started.</p>)

const Options = ({options, handleRemoveAll, handleDeleteOption}) => (
    <div>
        {options.length === 0 &&  (<GetStared />)}
        {options.map((option) => (
            <Option 
                key={option} 
                handleDeleteOption={handleDeleteOption}
                optionText={option}
            />
        ))}
        <RemoveAll 
            handleRemoveAll={handleRemoveAll} 
            hasOptions={options.length > 0 || 0 }
        />
    </div>
);

export default Options;