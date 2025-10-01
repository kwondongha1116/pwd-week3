import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
`;

function AdminDashboard() {
  return (
    <Container>
      <h1>관리자 대시보드</h1>
      <p>맛집 제보와 등록된 맛집들을 관리할 수 있습니다.</p>

      <ul>
        <li>
          <Link to="/admin/restaurants">맛집 관리</Link>
        </li>
        <li>
          <Link to="/admin/submissions">제보 확인</Link>
        </li>
      </ul>
    </Container>
  );
}

export default AdminDashboard;
