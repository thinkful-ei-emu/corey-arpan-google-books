import React from 'react';

class PrintType extends React.Component {

    state = {printType: {value: ''}};

    setPrintType= (printType) => {
        this.setState({printType: {value: printType}});
    }
    
    render() {
    return(
        <div>
            <form className="print-type">
                <label htmlFor="print-type">Print Type:</label>
                <select id="print-type" onChange={e => this.setPrintType(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Books">Books</option>
                    <option value="Magazines">Magazines</option>
                </select>
            </form>
        </div>
    )
}
}


export default PrintType;