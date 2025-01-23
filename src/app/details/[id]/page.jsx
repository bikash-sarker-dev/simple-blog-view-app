import axios from "axios";

const DetailsPage = async ({ params }) => {
  const { id } = params;
  console.log(id);

  const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const detailsData = await res.data;
  console.log(detailsData);

  return (
    <div>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="max-w-3xl bg-default p-10 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">{detailsData.title}</h2>
          <p>{detailsData.body}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
