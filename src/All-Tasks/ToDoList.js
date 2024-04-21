import React, { useState } from 'react'

const ToDoList = () => {


    const [inputValue, setInputValue] = useState('');

    const [items, setItems] = useState([]);

    const [items2, setItems2] = useState([]);

    const [bool, setBool] = useState(false);

    const [tempIndex, setTempIndex] = useState();

    const [btn, setBtn] = useState('ADD');

    // ADD
    const addItem = () => {
        if (inputValue == '') {
            alert('Please enter the item.');
        }
        else {
            setItems([...items, { text: inputValue, check: false }]);

            if (bool == true) {
                const tempArray = [...items];
                tempArray[tempIndex].text = inputValue;

                setItems(tempArray);

                setBool(false);

                // Change Button Value
                setBtn('ADD');
            }
        }

        setInputValue('');
    }

    // UPDATE
    const updateItem = (updateIndex) => {
        setInputValue(items[updateIndex].text);

        setBool(true);
        setTempIndex(updateIndex);

        // Change Button Value
        setBtn("CHANGE");
    }

    // DELETE
    const deleteItem = (itemIndex) => {
        const deleteData = items.filter((deleteValue, deleteIndex) => {
            return itemIndex != deleteIndex;
        })

        setItems(deleteData);

    }

    // CHECKBOX
    const checkBox = (checkIndex) => {
        const tArray = [...items];
        tArray[checkIndex].check = !tArray[checkIndex].check;

        setItems(tArray);
        setItems2(items);
    }

    //COMPLETED DATA
    const completedData = () => {
        const completedItem = items2.filter((item2) => {
            return item2.check == true;
        })

        setItems(completedItem);
    }

    // INCOMPLETED DATA
    const incompletedData = () => {
        const inCompletedItem = items2.filter((item2) => {
            return item2.check == false;
        })

        setItems(inCompletedItem);
    }

    // ALL DATA
    const allData = () => {
        setItems(items2);
    }

    // SEARCH DATA
    const searchData = () => {

        const searchItem = items2.filter((item2) => {

            return inputValue == item2.text;
        })

        setItems(searchItem);

    }

    return (
        <>
            <div className='todo-list py-5 border-bottom'>
                <h1 className='mb-4'>To Do List</h1>

                <div className="box">

                    <div className="inputData d-flex align-items-center">

                        <input type="text" placeholder='ADD ITEM...' value={inputValue} className='form-control' onChange={(e) => setInputValue(e.target.value)} />
                        <input type="button" value={btn} className='body-btn ms-2 bg-info-subtle' onClick={() => addItem()} />
                        <input type="button" value={'FIND'} className='body-btn ms-2 bg-warning-subtle' onClick={() => searchData()} />

                        <input type="button" value={'COMPLETED'} className='body-btn ms-2 bg-success-subtle' onClick={() => completedData()} />
                        <input type="button" value={'INCOMPLETED'} className='body-btn ms-2 bg-danger-subtle' onClick={() => incompletedData()} />

                        <input type="button" value={'ALL DATA'} className='body-btn ms-2 bg-secondary-subtle' onClick={() => allData()} />
                    </div>
                    <div className="outputData mt-5">
                        <ul>
                            {
                                items.map((item, index) => {
                                    return (
                                        <>
                                            <li className='mb-4 d-flex align-items-center'>

                                                <input type="checkbox" className='form-check-input' checked={item.check} onChange={() => checkBox(index)} />
                                                <span className='mx-3' style={{ textDecoration: (item.check == true) ? 'line-through' : 'none' }}>{item.text}</span>

                                                <input type="button" value={'UPDATE'} className='body-btn bg-primary text-light' onClick={() => updateItem(index)} />
                                                <input type="button" value={'DELETE'} className='body-btn ms-3 bg-warning text-light' onClick={() => deleteItem(index)} />
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList;
