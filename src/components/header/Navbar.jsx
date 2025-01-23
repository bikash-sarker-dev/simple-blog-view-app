import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">Blog View</h2>
          </div>
          <div>
            <ul className="flex items-center gap-7 py-6">
              <li>
                <Link className="text-white text-lg" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white text-lg" href="/profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
