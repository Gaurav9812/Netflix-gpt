const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] md:pt-[10%] px-6 md:px-12 text-white md:bg-gradient-to-r md:from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/4"> {overview}</p>
      <div className="mt-1 md:mt-0">
        <button className=" py-1 md:py-4 px-2 md:px-10 bg-white rounded-lg text-black mr-2 hover:opacity-50">
          {" "}
          ▶️ Play
        </button>
        <button className="hidden md:inline-block py-3 px-10 bg-gray-400 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
