import Table from './Table';
import './styles.css';
import {text} from './text';


const WordTableApp = () => {
    const lowerCaseText = text.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    const textArray = lowerCaseText.split(" ").sort().filter(el => el !== "");
    const sortedObject = textArray.reduce((obj, word) => {
        if (!obj[word]) {obj[word] = 1;} 
        else { obj[word]++;}
        return obj;
    }, {});
    const sortedRowData = Object.entries(sortedObject);

    return (
        <div className="App">
            <Table rowData={sortedRowData}/>
        </div>
    )
}

export default WordTableApp
