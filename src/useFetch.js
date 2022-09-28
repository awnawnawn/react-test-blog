import {useState, useEffect} from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('error !!!')
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setPending(false)
          setError(null)
        })
        .catch(error => {
          console.log(error)
          setPending(false)
          setError(error.message)
        })

    return () => console.log('cleanup')

  }, [url])

  return {data, pending, error}
}

export default useFetch