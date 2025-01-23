export const metadata = {
  title: "Blog | Details",
  description: "this is a simple blog view post application.",
};

const layoutDetails = ({ children }) => {
  return (
    <>
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default layoutDetails;
