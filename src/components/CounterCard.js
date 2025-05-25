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

const HeroName = styled.h2`
  color: #ff9c41;
  margin: 0 0 10px 0;
`;

const Tier = styled.span`
  background: ${props => {
    switch(props.tier) {
      case '브론즈': return '#cd7f32';
      case '실버': return '#c0c0c0';
      case '골드': return '#ffd700';
      case '플래티넘': return '#e5e4e2';
      default: return '#666';
    }
  }};
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.9em;
  margin-left: 10px;
`;

const CounterList = styled.div`
  margin-top: 15px;
`;

const CounterItem = styled.div`
  background: #3a3a3a;
  padding: 8px 12px;
  border-radius: 8px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CounterCard = ({ hero }) => {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <img src={require(`../assets/${hero.image}`)} alt={hero.name} style={{ width: 60, height: 60, borderRadius: '50%', marginRight: 10 }} /> */}
        <HeroName>{hero.name}</HeroName>
        <Tier tier={hero.tier}>{hero.tier}</Tier>
      </div>
      <CounterList>
        <h3 style={{ margin: '10px 0' }}>카운터 영웅:</h3>
        {hero.counters.map((counter, index) => (
          <CounterItem key={index}>
            {counter}
          </CounterItem>
        ))}
      </CounterList>
    </Card>
  );
};

export default CounterCard; 