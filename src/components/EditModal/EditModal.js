import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
    let [item, setItem] = useState(props.editList);

    function handleEditInput(e) {
        let newObj = { ...item };
        newObj.name = e.target.value;
        setItem(newObj);
    }

    function handleSave() {
        props.handleSaveName(item);
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button>&times;</button>
                </div>
                <input
                    onChange={handleEditInput}
                    type="text"
                    value={item.name}
                    className="inp-edit"
                />
                <button onClick={handleSave}>save</button>
            </div>
        </div>
    );
};

export default EditModal;
