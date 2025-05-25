import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  background: #2a2a2a;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const MapName = styled.h2`
  color: #ff9c41;
  margin: 0 0 10px 0;
`;

const WinRate = styled.div`
  background: #3a3a3a;
  padding: 8px 12px;
  border-radius: 8px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CompList = styled.div`
  margin-top: 15px;
`;

const CompItem = styled.div`
  background: #3a3a3a;
  padding: 12px;
  border-radius: 8px;
  margin: 10px 0;
`;

const HeroList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const HeroTag = styled.span`
  background: #4a4a4a;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
`;

const MapCard = ({ map }) => {
  return (
    <Card>
      <MapName>{map.name}</MapName>
      
      <CompList>
        <h3>공격팀 승률: {(map.winRate.attack * 100).toFixed(1)}%</h3>
        <CompItem>
          <h4>추천 조합:</h4>
          <HeroList>
            {map.bestComps.attack.map((hero, index) => (
              <HeroTag key={index}>{hero}</HeroTag>
            ))}
          </HeroList>
        </CompItem>

        <h3>방어팀 승률: {(map.winRate.defense * 100).toFixed(1)}%</h3>
        <CompItem>
          <h4>추천 조합:</h4>
          <HeroList>
            {map.bestComps.defense.map((hero, index) => (
              <HeroTag key={index}>{hero}</HeroTag>
            ))}
          </HeroList>
        </CompItem>
      </CompList>
    </Card>
  );
};

export default MapCard; 