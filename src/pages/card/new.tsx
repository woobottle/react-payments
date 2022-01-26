import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardForm, CardNumberInput, CompanyModal, CvcInput, ExpireDateInput, OwnerNameInput, PasswordInput, RootLayout } from '@components';
import { CardProps } from '@interface';
import { initialNewCard } from '@constants';

interface CardNewPageProps {
  newCard: CardProps;
  setNewCard: React.Dispatch<React.SetStateAction<CardProps>>;
}

const CardNewPage = ({ newCard, setNewCard }: CardNewPageProps) => {
  const [companyModalOpened, setCompanyModalOpened] = useState(false);
  const navigate = useNavigate();
  const beforeOutPage = () => {
    setNewCard(initialNewCard);
    navigate(-1);
  };

  const { ownerName } = newCard;

  const handleSubmit = () => {
    if (true) return;
    navigate('/complete');
  };

  return (
    <RootLayout>
      <CardForm onSubmit={handleSubmit}>
        <CardForm.title title={`< 카드 추가`} onClick={beforeOutPage} />
        <Card cardInfo={newCard} type="new" />
        <CardNumberInput setNewCard={setNewCard} newCard={newCard} setCompanyModalOpened={setCompanyModalOpened} />
        <ExpireDateInput setNewCard={setNewCard} />
        <OwnerNameInput setNewCard={setNewCard} ownerName={ownerName} />
        <CvcInput setNewCard={setNewCard} />
        <PasswordInput setNewCard={setNewCard} />
        <CardForm.button />
      </CardForm>
      {companyModalOpened && <CompanyModal setNewCard={setNewCard} setCompanyModalOpened={setCompanyModalOpened} />}
    </RootLayout>
  );
};

export default CardNewPage;
