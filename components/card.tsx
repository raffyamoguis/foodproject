import cardStyle from './card.module.css';
import utilStyle from '../styles/utils.module.css';
import { AiFillStar } from 'react-icons/ai';

export default function card({
  width,
  img,
  name,
  description,
  rating,
}: {
  width?: number;
  img: string;
  name: string;
  description: string;
  rating: number;
}) {
  return (
    <div className={cardStyle.card} style={{ width: `${width}px` }}>
      {/* <Image src={img} alt='Food' style={{ width: '100%' }} /> */}
      <img src={img} style={{ width: '100%' }} />
      <div className={`${cardStyle.cardRating} ${utilStyle.mt1}`}>
        {[1, 2, 3, 4, 5].map((num: number) =>
          num <= rating ? (
            <AiFillStar style={{ color: 'yellow' }} />
          ) : (
            <AiFillStar />
          )
        )}
      </div>
      <div className={cardStyle.cardContainer}>
        <h4>
          <b>{name}</b>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
