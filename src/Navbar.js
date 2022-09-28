import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-12 pb-8 flex justify-between items-end border-b">
      <h1 className="text-3xl font-bold text-blue-400">The Dojo Blog</h1>
      <div className="space-x-4">
        <Link className="py-1 px-2 rounded-md duration-300 text-lg text-pink-400 hover:text-white hover:bg-pink-400" to="/">Home</Link>
        <Link className="py-1 px-2 rounded-md duration-300 text-lg text-pink-400 hover:text-white hover:bg-pink-400" to="/create">New Blog</Link>
      </div>
    </nav>
  )
}
export default Navbar