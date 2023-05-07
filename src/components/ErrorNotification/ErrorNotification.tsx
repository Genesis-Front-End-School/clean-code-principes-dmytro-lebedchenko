import { ErrorType } from '../../types/enums';
import './ErrorNotification.scss';

type Props = {
  error: ErrorType,
};

export const ErrorNotification: React.FC<Props> = ({ error }) => (
  <h1 className="error-notification" data-testid="error-notification">
    {`...${error}...`}
  </h1>
);
