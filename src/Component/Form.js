import { useState, useEffect} from "react";
import './form.css';

function Form() {
    const [showDiv, setShowDiv] = useState(false);
    const handleClick = () => {
        setShowDiv(true);

        // setTimeout(()=> {
        //     setShowDiv(false);
        // }, 1000)
    }

    useEffect(() => {
        if (showDiv) {
            const timeoutId = setTimeout(() => {
                setShowDiv(false);
            }, 700);

            // Clear the timeout if the component unmounts or the showDiv state changes
            return () => clearTimeout(timeoutId);
        }
    }, [showDiv]);

    return (
        <div className="Form">
            <h1 style={{ textAlign: 'center' }}>Inventory Management System</h1>
            <div className="d-flex justify-content-center">
                {showDiv && <div id="popup" style={{ width: "500px" }} className="d-flex justify-content-center bold">Item Added Successfully</div>}
            </div>
            <div className="container">
                <label for="item-name" className="form-label">Item Name</label>
                <input type='email' className="form-control" id="item-name" placeholder="Item Name"></input>
                <br></br>
                <label for="item-sp" className="form-label">Item Selling Price</label>
                <input type='email' className="form-control" id="item-sp" placeholder="Item Selling Price"></input>
                <br></br>
                <label for="item-bp" className="form-label">Item Buying Price</label>
                <input type='email' className="form-control" id="item-bp" placeholder="Item Buying Price"></input>
                <br></br>
                <button className="btn btn-secondary" onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}

export default Form;