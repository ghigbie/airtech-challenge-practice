import Modal from 'react-modal';

const OptionModal = ({selectedOption, handleClearSelectedOption}) => (
    <Modal 
        isOpen={!!selectedOption}
        contentLabel={'Selected Option'}
    >
        <h1>Selected Option</h1>
        {selectedOption && <p>{selectedOption}</p>}

        <div>
            <button onClick={handleClearSelectedOption}>close</button>
        </div>
    </Modal>
);

export default OptionModal;