import {useState, useEffect} from "react";

import BlogList from "./BlogList";

import useFetch from "./useFetch";

const Home = () => {

  const {data, pending, error} = useFetch('http://localhost:12345/list');

  const [dataBlog, setDataBlog] = useState(null)
  useEffect(() => {
    setDataBlog(data)
  }, [data])

  const handelDelete = (id) => {
    fetch(`http://localhost:12345/list/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setDataBlog(data.filter(item => item.id !== id))
    })
  }


  return (
    <div className="blog-list">
      {error && <p>{error}</p>}
      {pending && <p>loading...</p>}
      {dataBlog && <BlogList blogs={dataBlog} handelDelete={handelDelete}/>}
    </div>
  )

}

export default Home