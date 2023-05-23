import './ToTopButton.scss';

export const ToTopButton: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="button-top"
      type="button"
      data-testid="to-top-button"
      onClick={handleScrollToTop}
    >
      <p className="button-top__text">
        Back to top
      </p>

      <span className="button-top__icon" />
    </button>
  );
};
