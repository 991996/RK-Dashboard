import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Reviews({ rate = 0 }) {
  const stars = [];
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;
  const totalStars = 5;

  // full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} size={16} />);
  }

  // half star
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" size={16} />);
  }

  // empty stars
  const emptyStars = totalStars - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaStar key={`empty-${i}`} size={16} className="text-gray-300" />
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex  gap-1 text-yellow-500">{stars}</div>
      <p className="text-sm text-gray-500">(55 Reviews)</p>
    </div>
  );
}

export default Reviews;
