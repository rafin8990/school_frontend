import Image from 'next/image';
import Link from 'next/link';

const ImageNVideoGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pb-16">
      <Link href="/videogallery" className="relative group border-primary_school border">
        <h2 className="heading">Video Gallery</h2>
        <Image
          src="/videogallery.jpg"
          width={500}
          height={500}
          alt="video gallery"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg">View Video</span>
        </div>
      </Link>
      <Link href="/photogallery" className="relative group border-primary_school border">
        <h2 className="heading">Photo Gallery</h2>
        <Image
          src="/imagegallery.jpg"
          width={500}
          height={500}
          alt="photo gallery"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg">View Photo</span>
        </div>
      </Link>
    </div>
  );
};

export default ImageNVideoGallery;
