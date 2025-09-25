import Image1 from "../assets/Blogs/Image1.png";
import Image2 from "../assets/Blogs/Image2.png";
import Image3 from "../assets/Blogs/Image3.png";

function NewsAndArticle() {
  const blogsData = [
    {
      image: Image1,
      heading: "Lorem Ipsum",
      description: "Lorem Ipsum",
    },
    {
      image: Image2,
      heading: "Lorem Ipsum",
      description: "Lorem Ipsum",
    },
    {
      image: Image3,
      heading: "Lorem Ipsum",
      description: "Lorem Ipsum",
    },
  ];
  return (
    <section className="px-6 md:px-20 lg:px-30 py-10 md:py-16  space-y-8 bg-[#F8F7F0]" id="blogs">
      {/* heading Section */}
      <header className="text-center">
        <h2 className="sub-heading-1">From the Blog</h2>
        <h3 className="heading-2">News & Article</h3>
      </header>
      {/* Blogs Sections */}
      <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogsData?.map((data) => (
          <div className="transition-all duration-300 hover:translate-y-3 cursor-pointer">
            {/* Image Section */}
            <div>
              <img src={data?.image} className="max-h-48" />
            </div>
            {/* Content Section */}
            <section className="bg-white shadow-md p-6 space-y-2 rounded-b-lg mt-0">
              <h2 className="heading-3">{data?.heading}</h2>
              <p className="paragraph-1">{data?.description}</p>
            </section>
          </div>
        ))}
      </section>
    </section>
  );
}

export default NewsAndArticle;
