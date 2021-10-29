import {useState} from 'react';

//I would probably use styled components here if I had a choice. I put these styles in to make the table more readable 

const contianerStyles = {
    margin: '44px',
}

const tableStyles = {
    width: '100vh',
    border: '1px solid grey',
}

const cellStyles = {
    padding: '8px 0',
    borderBottom: '1px solid grey',
}

const buttonStyles = {
    margin: '36px',
    padding: '12px',
    font: '16px',
    borderRadius: '12px',
    width: '130px'
}

const Table = ({rowData}) => {
    const [toggleCount, setToggleCount] = useState(false);
    const sorted = toggleCount ? 
        [...rowData].sort((a, b) => b[1] - a[1])
        :
        rowData;


    return (
        <div style={contianerStyles}>
            <button 
                style={buttonStyles}
                onClick={() => setToggleCount(!toggleCount)}>
                Order By {toggleCount ? 'Word' : 'Count'}
            </button>
            <table style={tableStyles}>
                <thead>
                    <tr>
                        <th style={{...cellStyles, borderRight: '1px solid grey'}}>
                            Word
                        </th>
                        <th style={cellStyles}>
                            Number of Occurrences
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sorted.map((row) => (
                        <tr key={row[0]}>
                            <td style={cellStyles}>{row[0]}</td>
                            <td style={cellStyles}>{row[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
