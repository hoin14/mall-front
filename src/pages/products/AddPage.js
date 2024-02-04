import React from 'react'
import AddComponent from '../../components/products/AddComponent'

function AddPage(props) {
    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Products Add Page
            </div>
            <AddComponent/>
        </div>
    )
}

export default AddPage
