import React, { useState } from "react";
import "./AddContainer.css";

const AddContainer = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    let handleAdd = () => {
        const newContainer = {
            name: name,
            description: description,
            id: Date.now(),
        };

        props.handleContainer(newContainer);
        setName("");
        setDescription("");
    };

    return (
        <div>
            <input
                className="inp-name"
                onChange={handleName}
                type="text"
                placeholder="Name"
                value={name}
            ></input>
            <input
                className="inp-des"
                onChange={handleDescription}
                type="text"
                placeholder="Description"
                value={description}
            ></input>
            <button className="btn" onClick={handleAdd}>
                Add new container
            </button>
        </div>
    );
};

export default AddContainer;
