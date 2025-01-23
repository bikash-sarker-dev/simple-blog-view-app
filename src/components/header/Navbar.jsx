import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  let { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-primary px-3 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <nav className="flex flex-col sm:flex-row pt-3 sm:pt-0 justify-between items-center ">
          <div>
            <h2 className="text-3xl font-bold text-white">Blog View</h2>
          </div>
          <div>
            <ul className="flex items-center gap-7 lg:py-6">
              <li>
                <Link className="text-white text-lg" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-lg"
                  href={user ? "/profile" : "/api/auth/login"}
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-7 py-6">
              {user ? (
                <>
                  <Link
                    className="text-white text-lg bg-accent py-2 rounded-md border border-info px-6"
                    href="/api/auth/logout"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      className="text-white text-lg bg-accent py-2 rounded-md border border-info px-6"
                      href="/api/auth/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white text-lg bg-accent py-2 rounded-md border border-info px-6"
                      href="/api/auth/register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
