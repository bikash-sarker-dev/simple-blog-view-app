import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  let { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="bg-info text-5xl p-10 rounded-2xl">
        Welcome to your profile.
      </p>
    </div>
  );
};

export default ProfilePage;
