const VideoCarousel = () => {
  const videos = [
    "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755359134/go_wheelo_quqgxp.gif",
    "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755359130/arabian_rogpzs.gif",
    "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755357609/asligems_cx9ntn.gif",
    "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755443775/Binni_d8smwh.gif",
    "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755443771/YHL_thsupk.gif",
    "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755442431/photojewels_aojp4i.gif",
    "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755506027/fictales_rim5pq.gif",
  ];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-background">
      {/* Left Blur */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10"></div>

      {/* Right Blur */}
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

      {/* Marquee Wrapper */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...videos, ...videos].map((src, idx) => (
          <div key={idx} className="flex-shrink-0 w-48 sm:w-56 md:w-72 lg:w-80 px-4">
            <img
              src={src}
              alt="video thumbnail"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
