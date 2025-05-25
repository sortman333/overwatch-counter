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

const TierName = styled.h2`
  color: #ff9c41;
  margin: 0 0 10px 0;
`;

const CompList = styled.div`
  margin-top: 15px;
`;

const CompItem = styled.div`
  background: #3a3a3a;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
`;

const WinRate = styled.div`
  color: #4CAF50;
  font-size: 1.2em;
  margin: 10px 0;
`;

const Description = styled.p`
  color: #888;
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

const TierCompCard = ({ tier, comps }) => {
  return (
    <Card>
      <TierName>{tier}</TierName>
      <CompList>
        {comps.bestComps.map((comp, index) => (
          <CompItem key={index}>
            <WinRate>승률: {(comp.winRate * 100).toFixed(1)}%</WinRate>
            <Description>{comp.description}</Description>
            <HeroList>
              {comp.heroes.map((hero, heroIndex) => (
                <HeroTag key={heroIndex}>{hero}</HeroTag>
              ))}
            </HeroList>
          </CompItem>
        ))}
      </CompList>
    </Card>
  );
};

export default TierCompCard; 