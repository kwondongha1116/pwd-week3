import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaClipboardList, FaHome } from 'react-icons/fa';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: #333;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MenuButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-weight: bold;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

function AdminPage() {
  return (
    <Container>
      <Title>관리자 페이지</Title>
      <Menu>
        <MenuButton to="/submissions">
          <FaClipboardList /> 제보된 맛집 보기
        </MenuButton>
        <MenuButton to="/">
          <FaHome /> 홈으로 돌아가기
        </MenuButton>
      </Menu>
    </Container>
  );
}

export default AdminPage;
