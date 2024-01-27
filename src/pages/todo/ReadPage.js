import React from 'react'
import { useParams} from 'react-router-dom'
import ReadComponent from '../../components/todo/ReadComponent';

function ReadPage() {
    
    const {tno} = useParams();
    
    return (
        <div className="font-extrabold w-full bg-white mt-6">
            <div className={'text-3xl'}>
                Todo Read Page Component {tno}
            </div>        

            <ReadComponent tno={tno}/>
        </div>
    )
}

export default ReadPage
