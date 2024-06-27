export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Tailwind CSS</div>
        <ul className="flex">
          <li className="ml-4">
            <a href="#" className="text-white">Home</a>
          </li>
          <li className="ml-4">
            <a href="#" className="text-white">About</a>
          </li>
          <li className="ml-4">
            <a href="#" className="text-white">Services</a>
          </li>
          <li className="ml-4">
            <a href="#" className="text-white">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}