import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = ({selectedOption, handleClearSelectedOption}) => (
    <Modal 
        isOpen={!!selectedOption}
        contentLabel={'Selected Option'}
        onRequestClose={handleClearSelectedOption}
    >
        <h1>Selected Option</h1>
        {selectedOption && <p>{selectedOption}</p>}

        <div>
            <button onClick={handleClearSelectedOption}>close</button>
        </div>
    </Modal>
);

export default OptionModal;