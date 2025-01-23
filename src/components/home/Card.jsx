import Link from "next/link";

const Card = ({ post }) => {
  let description = post.body.split(" ").splice(0, 15).join(" ");

  return (
    <div className="bg-default p-5 min-h-[350px] relative">
      <h1 className="text-xl font-bold">{post.title}</h1>
      <p className="mb-8 text-gray-700 mt-3">{description}</p>
      <Link
        className="bg-accent py-2 px-5 mt-6 border rounded-md absolute bottom-6 left-6 hover:bg-primary hover:text-background transition-all duration-initial hover:shadow-xl  "
        href={`/details/${post.id}`}
      >
        Details
      </Link>
    </div>
  );
};

export default Card;
