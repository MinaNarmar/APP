import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredBets, setStatusFilter, setBets, updateBetStatus } from '../store/betsSlice';
import { AppDispatch } from '../store/store';
import { Container, Table, Button, StatusFilter } from './StyledComponents';  

const BetsTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bets = useSelector(selectFilteredBets);

  useEffect(() => {
    const fetchBets = async () => {
      const response = await fetch('http://localhost:3001/bets');
      const data = await response.json();
      dispatch(setBets(data));
    };

    fetchBets();
  }, [dispatch]);

  const handleStatusChange = (id: string, newStatus: 'Pending' | 'Won' | 'Lost') => {
    dispatch(updateBetStatus({ id, status: newStatus }));
    fetch(`http://localhost:3001/bets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    });
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatusFilter(event.target.value as 'All' | 'Pending' | 'Won' | 'Lost'));
  };

  return (
    <Container>
      <StatusFilter onChange={handleFilterChange} defaultValue="All">
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Won">Won</option>
        <option value="Lost">Lost</option>
      </StatusFilter>
      <Table>
        <thead>
          <tr>
            <th>Bet ID</th>
            <th>User ID</th>
            <th>Event Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bets.map(bet => (
            <tr key={bet.id}>
              <td>{bet.id}</td>
              <td>{bet.userId}</td>
              <td>{bet.eventName}</td>
              <td>{bet.amount}</td>
              <td>{bet.status}</td>
              <td>
                <Button onClick={() => handleStatusChange(bet.id, 'Pending')}>Pending</Button>
                <Button onClick={() => handleStatusChange(bet.id, 'Won')}>Won</Button>
                <Button onClick={() => handleStatusChange(bet.id, 'Lost')}>Lost</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BetsTable;
