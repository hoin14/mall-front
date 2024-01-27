import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum  = (param, defaultValue) => {
    if(!param){
        return defaultValue
    }

    return parseInt(param)
}

const useCustomMove = () => {

    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false);

    const [queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)

    //page=3&size=10
    const queryDefault = createSearchParams({page, size}).toString()

    const moveToList = (pageParam) => {

        let querytStr = ""

        if(pageParam){
            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(pageParam.size, 10)
            querytStr = createSearchParams({page: pageNum, size: sizeNum}).toString()
        
        }else {
            querytStr = queryDefault
        }

        setRefresh(!refresh);

        navigate({pathname:'../list', search:querytStr})
    }

    const moveToModify = (num) => {
        navigate({
            pathname:`../modify/${num}`,
            search:queryDefault
        })
    }

    const moveToRead = (num) => {
        navigate({
            pathname:`../read/${num}`,
            search:queryDefault
        })
    }

    return {moveToList, moveToModify, moveToRead, page, size, refresh}
}

export default useCustomMove
