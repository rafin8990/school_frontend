'use client';

import { noticeData } from '@/data/notice';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Notice {
  notice_title: string;
  publish_date: string;
}

const Notice = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setNotices([...noticeData, ...noticeData]);
  }, []);

  useEffect(() => {
    if (notices.length === 0) return;

    const intervalId = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % noticeData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [notices.length]);

  return (
    <div className="border shadow-sm">
      <div className="">
        <h2 className="heading">নোটিশ বোর্ড</h2>
      </div>

      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute w-full transition-transform duration-1000 ease-linear"
          style={{ transform: `translateY(-${offset * 100}px)` }}
        >
          {notices.map((notice, index) => (
            <div
              key={`${notice.publish_date}-${index}`}
              className="h-[100px] p-4 border-b hover:bg-gray-50"
            >
              <div className="h-full flex flex-col justify-between ps-6 relative">
                <span className="absolute top-2 -left-1">
                  <ChevronRight className="inline w-5 mb-1 text-yellow-600" />
                </span>
                <p className="text-sm md:text-base font-medium line-clamp-2">
                  {notice.notice_title}
                </p>
                <p className="text-sm text-gray-500">প্রকাশের তারিখ: {notice.publish_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;
