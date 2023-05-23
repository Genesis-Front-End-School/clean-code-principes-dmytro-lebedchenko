import { Loader } from 'courses-app-ui-tools';

import { ErrorType } from '../../../data/types/enums';
import { useAppSelector } from '../../../services/app/hooks';
import { ErrorNotification } from '../../components/common';
import { CourseList } from '../../components/courses';

export const HomePage: React.FC = () => {
  const {
    courses,
    hasError,
    loaded,
  } = useAppSelector(state => state.courses);

  return (
    <>
      {hasError && (
        <ErrorNotification
          error={ErrorType.GET_COURSES}
        />
      )}

      {!loaded && <Loader />}

      {courses.length > 0
        && !hasError
        && loaded
        && (
          <CourseList />
        )}
    </>
  );
};
