import React, { useState } from 'react';
import styled from '@emotion/styled';
import { heroes } from './data/heroes';
import { maps } from './data/maps';
import { tierComps } from './data/tierComps';
import CounterCard from './components/CounterCard';
import MapCard from './components/MapCard';
import TierCompCard from './components/TierCompCard';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #1a1a1a;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #ff9c41;
  font-size: 2.5em;
  margin: 0;
`;

const Subtitle = styled.p`
  color: #888;
  margin: 10px 0;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#ff9c41' : '#333'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #ff9c41;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ViewSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

function App() {
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');
  const [currentView, setCurrentView] = useState('counters'); // 'counters', 'maps', 'tierComps'

  const roles = ['all', 'tanks', 'damage', 'support'];
  const tiers = ['all', '브론즈', '실버', '골드', '플래티넘'];

  const filteredHeroes = Object.entries(heroes).reduce((acc, [role, roleHeroes]) => {
    if (selectedRole === 'all' || selectedRole === role) {
      Object.entries(roleHeroes).forEach(([key, hero]) => {
        if (selectedTier === 'all' || selectedTier === hero.tier) {
          acc.push(hero);
        }
      });
    }
    return acc;
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'counters':
        return (
          <>
            <FilterContainer>
              <div>
                <h3 style={{ color: '#fff', marginBottom: '10px' }}>역할</h3>
                {roles.map(role => (
                  <FilterButton
                    key={role}
                    active={selectedRole === role}
                    onClick={() => setSelectedRole(role)}
                  >
                    {role === 'all' ? '전체' : role}
                  </FilterButton>
                ))}
              </div>

              <div>
                <h3 style={{ color: '#fff', marginBottom: '10px' }}>티어</h3>
                {tiers.map(tier => (
                  <FilterButton
                    key={tier}
                    active={selectedTier === tier}
                    onClick={() => setSelectedTier(tier)}
                  >
                    {tier === 'all' ? '전체' : tier}
                  </FilterButton>
                ))}
              </div>
            </FilterContainer>

            <CardGrid>
              {filteredHeroes.map((hero, index) => (
                <CounterCard key={index} hero={hero} />
              ))}
            </CardGrid>
          </>
        );
      case 'maps':
        return (
          <CardGrid>
            {Object.entries(maps).map(([key, map]) => (
              <MapCard key={key} map={map} />
            ))}
          </CardGrid>
        );
      case 'tierComps':
        return (
          <CardGrid>
            {Object.entries(tierComps).map(([tier, comps]) => (
              <TierCompCard key={tier} tier={tier} comps={comps} />
            ))}
          </CardGrid>
        );
      default:
        return null;
    }
  };

  return (
    <AppContainer>
      <Header>
        <Title>오버워치 가이드</Title>
        <Subtitle>영웅 카운터, 맵별 조합, 티어별 조합 정보를 확인하세요!</Subtitle>
      </Header>

      <ViewSelector>
        <FilterButton
          active={currentView === 'counters'}
          onClick={() => setCurrentView('counters')}
        >
          영웅 카운터
        </FilterButton>
        <FilterButton
          active={currentView === 'maps'}
          onClick={() => setCurrentView('maps')}
        >
          맵별 조합
        </FilterButton>
        <FilterButton
          active={currentView === 'tierComps'}
          onClick={() => setCurrentView('tierComps')}
        >
          티어별 조합
        </FilterButton>
      </ViewSelector>

      {renderContent()}
    </AppContainer>
  );
}

export default App; 