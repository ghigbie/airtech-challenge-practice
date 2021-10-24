const Action = ({hasOptions, handlePick}) => (
    <button 
        disabled={!hasOptions}
        onClick={handlePick}>
        What should I do?
    </button>
);

export default Action;