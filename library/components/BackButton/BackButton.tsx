import './BackButton.scss';

export const BackButton: React.FC = () => {
  return (
    <a
      href="/"
      className="back-button"
      type="button"
      data-testid="back-button"
    >
      <span className="back-button__icon" />

      Back
    </a>
  );
};
