import React from "react";
import { useQuery } from "@tanstack/react-query";
import { restaurantAPI } from "../services/api";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
`;

function ManageRestaurants() {
  const { data, isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: restaurantAPI.getRestaurants,
  });

  if (isLoading) return <p>불러오는 중...</p>;

  return (
    <Container>
      <h2>맛집 관리</h2>
      <ul>
        {data?.data?.map((r) => (
          <li key={r.id}>
            {r.name} - {r.category} ({r.location})
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default ManageRestaurants;
