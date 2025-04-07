import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f4f4f4;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 10px 5px;
    }
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const StatusFilter = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
