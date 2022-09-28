import {useParams} from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {

  const {id} = useParams()
  const {data: blogData, pending, error} = useFetch(`http://localhost:12345/list/${id}`)

  return (
    <div>
      { pending && <p>loading...</p> }
      { error && <p>{error.message}</p> }
      <h2>{blogData && blogData.title}</h2>
      <p>{blogData && blogData.body}</p>
    </div>
  )
}
export default BlogDetail