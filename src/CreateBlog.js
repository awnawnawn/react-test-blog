import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const CreateBlog = () => {

  const [blogTitle, setBlogTitle] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')

  const [creatPending, setCreatPending] = useState(false)

  const routerHistory = useHistory()


  const [arrBlogAuthor] = useState([
    'awn',
    'nex',
    'new'
  ])


  const handleSubmitBlogData = () => {

    const blogData = {title: blogTitle, body: blogContent, link: '#', author: blogAuthor}

    setCreatPending(true)
    fetch('http://localhost:12345/list', {
      method: "POST",
      headers: {"Content-Type": "Application/json"},
      body: JSON.stringify(blogData)
    }).then(() => {
      fetch('http://localhost:12345/list')
        .then(res => res.json())
        .then(data => routerHistory.push(`/blog/${data.length + 1}`))
      setCreatPending(false)
    })
  }


  useEffect(() => {
    setBlogAuthor(arrBlogAuthor[0])
  }, [])

  return (
    <div>
      <h2 className="text-center text-xl">Create new blog</h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <span className="text-lg">Blog title</span>
          <input value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} type="text" required
                 className="mt-2 border text-lg p-2 outline-none" name="" id=""/>
        </div>
        <div className="flex flex-col">
          <span className="text-lg">Blog content</span>
          <textarea value={blogContent} onChange={(e) => setBlogContent(e.target.value)} required
                    className="mt-2 border text-lg p-2 outline-none"></textarea>
        </div>
        <div className="flex flex-col">
          <span className="text-lg">Blog author</span>
          <select value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)}
                  className="mt-2 border text-lg p-2 outline-none">
            {arrBlogAuthor.map((item, i) => <option value={item} key={i}>{item}</option>)}
          </select>
        </div>
        <button disabled={creatPending} type="submit"
                onClick={() => handleSubmitBlogData()}
                className={`${'!mt-10 rounded-md text-white px-4 py-2 text-xl'}
           ${creatPending ? 'bg-blue-100' : 'bg-blue-500'}`}>
          Create
        </button>
      </div>
    </div>
  )
}

export default CreateBlog