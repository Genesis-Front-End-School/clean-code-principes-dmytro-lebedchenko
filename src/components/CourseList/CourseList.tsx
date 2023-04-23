import {
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { Courses } from '../../types/models';
import { CourseCard } from '../CourseCard';
import { Pagination } from '../Pagination';
import './CourseList.scss';

export const CourseList: React.FC = () => {
  const { courses } = useAppSelector(state => state.courses);

  const [searchParams] = useSearchParams();

  const [leftLimit, setLeftLimit] = useState(0);
  const [rightLimit, setRightLimit] = useState(courses.length);

  const currentPage = searchParams.get('page') || '1';
  const perPage = 10;

  useEffect(() => {
    const maxRightLimit = perPage * +currentPage;

    if (maxRightLimit > courses.length) {
      setRightLimit(courses.length);
    } else {
      setRightLimit(maxRightLimit);
    }

    setLeftLimit(perPage * (+currentPage - 1));
  }, [currentPage, perPage, courses]);

  const visibleCourses = useMemo((): Courses[] => {
    return courses.slice(leftLimit, rightLimit);
  }, [courses, leftLimit, rightLimit]);

  return (
    <>
      <div className="course-list">
        {visibleCourses.map(item => (
          <CourseCard
            key={item.id}
            course={item}
          />
        ))}
      </div>

      <Pagination length={courses.length} />
    </>
  );
};
