import React from 'react';
import styled from '@emotion/styled';
import { FaUtensils, FaUser, FaEnvelope } from 'react-icons/fa';

// styled components
const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: #333;
`;

const SubmissionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafafa;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

const Field = styled.p`
  margin: 0.25rem 0;
  color: #555;

  strong {
    color: #333;
  }
`;

function SubmissionsPage() {
  // TODO: 나중에 Netlify Forms API 데이터 불러오기
  const dummySubmissions = [
    {
      id: 1,
      restaurantName: "송림식당",
      category: "한식",
      location: "아주대 정문 앞",
      submitterName: "홍길동",
      submitterEmail: "test@example.com",
    },
    {
      id: 2,
      restaurantName: "별미떡볶이",
      category: "분식",
      location: "영통역 근처",
      submitterName: "김철수",
      submitterEmail: "chulsoo@example.com",
    },
  ];

  return (
    <Container>
      <Title>제보된 맛집 목록</Title>
      <SubmissionList>
        {dummySubmissions.map((s) => (
          <Card key={s.id}>
            <Field><FaUtensils /> <strong>맛집:</strong> {s.restaurantName} ({s.category})</Field>
            <Field><strong>위치:</strong> {s.location}</Field>
            <Field><FaUser /> <strong>제보자:</strong> {s.submitterName}</Field>
            <Field><FaEnvelope /> <strong>이메일:</strong> {s.submitterEmail}</Field>
          </Card>
        ))}
      </SubmissionList>
    </Container>
  );
}

export default SubmissionsPage;
