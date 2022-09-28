import {Link} from "react-router-dom";

const BlogList = ({blogs, handelDelete}) => {

  return (
    <ul className="space-y-2">
      {blogs.map((item) => {
        return (
          <li className="group relative flex justify-between items-end px-1 py-2 border-b" key={item.id}>
            <div>
              <h2 className="text-lg hover:text-indigo-500 duration-300">
                <Link to={`/blog/${item.id}`}>
                  {item.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-400">{item.body}</p>
            </div>
            <span className="text-sm text-gray-400">by {item.author}</span>
            <button className="absolute right-2 top-2 text-sm opacity-0 duration-300 group-hover:opacity-100"
                    onClick={() => handelDelete(item.id)}>delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}
export default BlogList