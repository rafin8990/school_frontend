import { noticeData } from '@/data/notice';
import { CircleIcon } from 'lucide-react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

const NoticeSection = () => {
  return (
    <div className=" mx-auto   bg-white text-bengali py-3">
      <div className="border flex items-center overflow-hidden">
        <div
          className="bg-primary_school text-white py-3 px-6 border border-primary_school"
          style={{
            backgroundImage: `url("")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <p className="font-semibold">নোটিশ</p>
        </div>
        <div>
          <Marquee pauseOnHover style={{}}>
            {noticeData?.map((notice, idx) => (
              <div key={idx} style={{ marginRight: '20px' }}>
                <Link className="flex items-center gap-2 text-xl" href={'/'}>
                  <CircleIcon /> {notice?.notice_title}
                </Link>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;
