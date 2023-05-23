import './RatingStars.scss';

type Props = {
  rating: number
};

export const RatingStars: React.FC<Props> = ({ rating }) => {
  const fullStarsCount = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const emptyStarsCount = hasHalfStar
    ? 4 - fullStarsCount
    : 5 - fullStarsCount;

  const getFilledArray = (length: number) => {
    return Array.from({ length }, (_, i) => i);
  };

  const fullStarsBase = getFilledArray(fullStarsCount);
  const emptyStarsBase = getFilledArray(emptyStarsCount);

  return (
    <div
      className="rating__stars stars"
      data-testid="rating-stars"
    >
      {fullStarsBase.map((item) => (
        <span
          key={item}
          className="
            stars__star
            icon
            icon__star-filled"
        />
      ))}

      {hasHalfStar
        && (
          <span
            className="
              stars__star
              icon
              icon__star-half-filled"
          />
        )}

      {emptyStarsBase.map((item) => (
        <span
          key={item}
          className="
            stars__star
            icon
            icon__star-empty"
        />
      ))}
    </div>
  );
};
