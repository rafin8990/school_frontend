import { cn } from '@/lib/utils';
import Image from 'next/image';

const Achievements = () => {
  const achievements = [
    {
      name: 'Best School in Academic Excellence Award 2024',
      description: 'Awarded for outstanding performance in academics.',
      date: '2024-12-01',
      link: 'https://schoolwebsite.com/achievements/academic-excellence-2024',
      image: '/achievements.jpg',
    },
    {
      name: 'National Robotics Championship ',
      description: 'Secured first place in the National Robotics Championship.',
      date: '2024-11-15',
      link: 'https://schoolwebsite.com/achievements/robotics-championship-2024',
      image: '/achievements.jpg',
    },
  ];
  return (
    <div className="border border-primary_school">
      <h2 className="heading">Achievements</h2>
      {achievements.map((achievement, idx) => (
        <div
          className={cn(
            'grid grid-cols-8 p-4 gap-4',
            idx !== achievements.length - 1 && 'border-b',
          )}
          key={idx}
        >
          <div className="col-span-3">
            <Image
              src={achievement.image}
              alt="achievement"
              className="h-32 w-auto object-cover"
              width={200}
              height={200}
            />
          </div>
          <div className="col-span-5">
            <p className="text-2xl font-medium">{achievement.name}</p>
            <p className="text-gray-500">{achievement.description}</p>
            <p className="text-gray-500">Date: {achievement.date}</p>
            <a
              href={achievement.link}
              className="hover:text-blue-600 hover:underline cursor-pointer"
            >
              More Details...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
