import Card from "@/components/home/Card";
import axios from "axios";

export default async function Home() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const postData = res.data || [];

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-16">
          {postData.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
