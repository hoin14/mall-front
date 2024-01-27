import React from 'react'
import AddComponent from '../../components/todo/AddComponent';

function AddPage() {
    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo AddPage
            </div>
            <AddComponent/>
        </div>
    )
}

export default AddPage;
