import { useEffect, useState } from "react"
import fakeData from '../Fake Data/fakeDb.JSON'

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(fakeData)
            .then(res => res.json())
            .then(dataa => setData(dataa))
    }, [])
    return [data, setData];
}

export default useData;