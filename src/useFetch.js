import { useState, useEffect } from "react";

const useFetch = (url)=>{

    const [data, setdata] = useState()
    const [isPending, setIsPending] = useState(true)
    const [error, seterror] = useState(null)

     useEffect(() => {
        setTimeout(() => {
                   fetch('url')
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource')
                }
                return res.json()
            })
            .then((data) =>{ 
                console.log(data)
                setdata(data)
                setIsPending(false)
                seterror(null)
            })
            .catch((err) => {
                setIsPending(false)
                seterror(err.message)
            })
        }, 2000)

    }, [url]);

    return{data, setIsPending, error}
}
export default useFetch;