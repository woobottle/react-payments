import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@components';
import { CardProps } from '@interface';
// 이 페이지에서는 카드에 뭐가 들어가는지 알아야 할까?
interface CardIndexProps {
  cards: CardProps[];
}

const CardIndexPage = ({ cards }: CardIndexProps) => {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        {cards && cards.map((card: CardProps) => <Card cardInfo={card} />)}
        <div className="card-box">
          <Link to="/new">
            <div className="empty-card">+</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardIndexPage;
