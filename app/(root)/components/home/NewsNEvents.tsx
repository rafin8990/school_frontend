import { cn } from '@/lib/utils';
import Image from 'next/image';

const NewsNEvents = () => {
  const schoolEvents = [
    {
      name: 'Annual Inter-School Sports Day and Cultural Fest',
      date: '2025-02-15',
      link: 'https://schoolwebsite.com/events/annual-sports-day-cultural-fest',
      image: '/School-Event-Planning.jpg',
    },
    {
      name: 'Innovative Science Fair and Technology Exhibition 2025',
      date: '2025-03-10',
      link: 'https://schoolwebsite.com/events/innovative-science-fair-tech-exhibition',
      image: '/School-Event-Planning.jpg',
    },
  ];

  return (
    <div className="border border-primary_school">
      <h2 className="heading">News & Events</h2>
      {schoolEvents.map((sEvent, idx) => (
        <div
          className={cn('grid grid-cols-8 p-4 gap-4', idx !== schoolEvents.length && 'border-b')}
          key={idx}
        >
          <div className="col-span-3 ">
            <Image
              src={sEvent.image}
              alt="school logo"
              className="h-32 w-auto object-cover"
              width={200}
              height={200}
            ></Image>
          </div>
          <div className="col-span-5">
            <p className="text-2xl font-medium">{sEvent.name}</p>
            <p className="text- text-gray-500">Event Date: {sEvent.date}</p>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">
              Event Details...
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsNEvents;
