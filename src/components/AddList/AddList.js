import React from "react";
import "./AddList.css";

const AddList = (props) => {
    let style = {
        listStyleType: "none",
    };

    return (
        <div>
            <div className="parent-cont" style={style}>
                {props.container.map((item, index) => (
                    <div className="container-block" key={item.id}>
                        <div>
                            <button
                                className="btn-delete"
                                onClick={() => props.handleDelete(item.id)}
                            >
                                &times;
                            </button>
                            <button
                                className="btn-edit"
                                onClick={() => props.handleEdit(index)}
                            >
                                edit
                            </button>
                        </div>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddList;
