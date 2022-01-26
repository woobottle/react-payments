import { CardProps } from '@interface';
import React from 'react';
import styled from 'styled-components';
import { CARD_COMPANIES } from '@constants';

interface CompanyModalProps {
  setNewCard: React.Dispatch<React.SetStateAction<CardProps>>;
  setCompanyModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompanyModal = ({ setNewCard, setCompanyModalOpened }: CompanyModalProps) => {
  const modalClose = () => {
    setCompanyModalOpened(false);
  };

  const companyClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { name, color } = (event.target as HTMLElement).dataset;
    setCompanyModalOpened(false);
    setNewCard((prevVal) => {
      return {
        ...prevVal,
        company: `${name}`,
        bgColor: color,
      };
    });
  };

  return (
    <div className="modal-dimmed">
      <div className="modal" style={{ position: 'relative' }}>
        <div onClick={modalClose} style={{ position: 'absolute', top: '0.5rem', right: '1rem' }}>
          x
        </div>
        <div className="flex-center" style={{ flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          {CARD_COMPANIES &&
            CARD_COMPANIES.map((company) => {
              const { name, color } = company;
              return (
                <div className="modal-item-container" key={`${name}${color}`}>
                  <div className="modal-item-dot" style={{ backgroundColor: color }} onClick={companyClick} data-name={name} data-color={color} />
                  <span className="modal-item-name">{name}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CompanyModal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 100%;
  width: 950px;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: #141414;
`;