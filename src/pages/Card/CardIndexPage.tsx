import React from 'react';
import { useRouter } from '@hooks';
import { CardProps } from '@interface';

interface Props {
  cards: CardProps[];
}

const CardIndexPage = ({ cards }: Props) => {
  const router = useRouter();

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        <div className="card-box">
          <div className="empty-card" onClick={() => router.push('/cards/new')}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIndexPage;
