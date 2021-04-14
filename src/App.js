import React, { useState, useEffect } from "react";
import AddContainer from "./components/AddContainer/AddContainer";
import AddList from "./components/AddList/AddList";
import EditModal from "./components/EditModal/EditModal";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    const [container, setContainer] = useState([]);
    let [modal, setModal] = useState(false);
    let [editList, setEditList] = useState({});

    async function handleContainer(newObj) {
        let newContainer = [...container];
        newContainer.push(newObj);
        setItemToStorage(newObj);

        await setContainer(newContainer);
    }

    useEffect(() => {
        if (!localStorage.getItem("container")) {
            localStorage.setItem("container", "[]");
        }
        setContainer(JSON.parse(localStorage.getItem("container")));
    }, []);
    function render() {
        if (!localStorage.getItem("container")) {
            localStorage.setItem("container", "[]");
        }
        let newData = JSON.parse(localStorage.getItem("container"));
        return newData;
    }
    function setItemToStorage(task) {
        if (!localStorage.getItem("container")) {
            localStorage.setItem("container", "[]");
        }
        let data = JSON.parse(localStorage.getItem("container"));
        data.push(task);
        localStorage.setItem("container", JSON.stringify(data));
    }

    function handleDelete(id) {
        let data = JSON.parse(localStorage.getItem("container"));
        let newContainer = container.filter((item) => {
            return item.id !== id;
        });
        setContainer(newContainer);
        localStorage.setItem("container", JSON.stringify(newContainer));
    }

    function handleEdit(index) {
        setModal(true);
        setEditList(container[index]);
    }

    function handleSaveName(newName) {
        let newContainer = container.map((item) => {
            if (item.id === newName.id) {
                return newName;
            } else {
                return item;
            }
        });

        setContainer(newContainer);
        setModal(false);
    }

    return (
        <div>
            <Navbar />
            <AddContainer handleContainer={handleContainer} />
            <AddList
                container={container}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            {modal ? (
                <EditModal
                    editList={editList}
                    handleSaveName={handleSaveName}
                />
            ) : null}
            <Footer />
        </div>
    );
};

export default App;
