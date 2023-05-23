import { Loader } from 'courses-app-ui-tools';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import { ErrorType } from '../../../data/types/enums';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../services/app/hooks';
import {
  selectedCourseInit,
} from '../../../services/features/selectedCourseSlice';
import { ErrorNotification } from '../../components/common';
import { Course } from '../../components/courses';

export const CoursePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    selectedCourse,
    hasError,
    loaded,
  } = useAppSelector(state => state.selectedCourse);

  const { courseId = '' } = useParams();

  useEffect(() => {
    if (!selectedCourse) {
      dispatch(selectedCourseInit(courseId));
    }
  }, [courseId, selectedCourse, dispatch]);

  return (
    <>
      {hasError && (
        <ErrorNotification
          error={ErrorType.GET_COURSE_DETAILS}
        />
      )}

      {!loaded && <Loader />}

      {selectedCourse
        && !hasError
        && loaded
        && (
          <Course />
        )}
    </>
  );
};
