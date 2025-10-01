import React, { useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
`;

function SubmissionList() {
  const [submissions] = useState([
    {
      id: 1,
      restaurantName: "테스트 식당",
      category: "한식",
      location: "아주대 정문 앞",
      submitterName: "홍길동",
    },
  ]);

  return (
    <Container>
      <h2>제보된 맛집 목록</h2>
      <ul>
        {submissions.map((s) => (
          <li key={s.id}>
            {s.restaurantName} ({s.category}) - {s.submitterName}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default SubmissionList;
