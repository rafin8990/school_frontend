'use client';
import { useGetList } from '@/hooks/APIHooks';
import { usePathname } from 'next/navigation';
import NoticeCard from './NoticeCard';
import NoticeUploadModal from './Modal/AddNoticeModal';

interface NoticeData {
  notice_title: string;
  publish_date: string;
  notice_content_url: string;
}

const NoticeContainer = () => {
  const { data: noticeData } = useGetList<NoticeData>('/notice', 'notice');
  const pathName = usePathname();
  return (
    <div className="flex flex-col gap-4  justify-center items-center py-10 ">
      {/* --- Admin Button --- */}
      {pathName.includes('dashboard') && <NoticeUploadModal />}

      {noticeData?.map((notice, idx) => <NoticeCard key={idx} data={notice} />)}
    </div>
  );
};

export default NoticeContainer;
