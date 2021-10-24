const RemoveAll = ({handleRemoveAll, hasOptions}) => (
    <button
        disabled={!hasOptions}
        onClick={handleRemoveAll}> 
        Remove All
    </button>
);

export default RemoveAll;