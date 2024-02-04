import React from 'react'

function FetchingModal(props) {
    return (
        <div className={'fixed top-0 left-0 z-[1055] flex h-full w-full justify-center bg-black bg-opacity-20'}>
            <div className="bg-white rounded-3xl opacity-100 h-1/4 min-w-[600px] flex justify-center items-center">
                <div className="text-4xl font-extrabold text-orange-400 m-20">
                    Loading.....
                </div>
            </div>
        </div>
    );
}

export default FetchingModal
