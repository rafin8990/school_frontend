import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ChairmanMessage = () => {
  return (
    <section className="pb-10">
      <h2 className="heading">Message of The Chairman</h2>
      <div className="">
        <div className="grid grid-cols-7 border">
          <div className="mx-auto border-b pb-4 col-span-2 border-e p-10">
            <Image
              src={'/c1.jpg'}
              alt={` g`}
              width={500}
              height={500}
              className="mx-auto h-72 object-cover  rounded-t-lg"
            ></Image>
            <h2 className="text-xl font-semibold pb-4 text-center pt-2">মোঃ মাহবুব হোসেন</h2>
            <div className="flex space-x-4 text-white mx-auto items-center justify-center pb-6">
              <Link href="#" className="rounded-full bg-[#1B365C] p-2 hover:opacity-80">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="rounded-full bg-[#1B365C] p-2 hover:opacity-80">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="rounded-full bg-[#1B365C] p-2 hover:opacity-80">
                <span className="sr-only">Google</span>
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="rounded-full bg-[#1B365C] p-2 hover:opacity-80">
                <span className="sr-only">YouTube</span>
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-6 pt-6 col-span-5">
            <h2 className="text-3xl font-semibold pb-4 border-b mb-6">Message of The Chairman</h2>
            <p className="">
              শিক্ষা মানুষের মৌলিক অধিকার। দেশ-জাতিকে গড়ে তোলাই সকল শিক্ষার মূল উদ্দেশ্য। সমাজ ও
              রাষ্ট্র গঠনের জন্য এবং উন্নতজীবন গড়ার জন্য সুশিক্ষার প্রয়োজন। মানবিক মূল্যবোধ,
              চারিত্রিক উৎকর্ষ ও মনুষ্যত্ব বিকাশের জন্য এবং বর্তমান বিশ্বে টিকে থাকার জন্য সুশিক্ষা
              অতীব প্রয়োজন।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
