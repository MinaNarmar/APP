import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface Bet {
  id: string;
  userId: string;
  eventName: string;
  amount: number;
  status: 'Pending' | 'Won' | 'Lost';
}

interface BetsState {
  bets: Bet[];
  statusFilter: 'All' | 'Pending' | 'Won' | 'Lost';
}

const initialState: BetsState = {
  bets: [],
  statusFilter: 'All'
};

const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    setBets(state, action: PayloadAction<Bet[]>) {
      state.bets = action.payload;
    },
    setStatusFilter(state, action: PayloadAction<'All' | 'Pending' | 'Won' | 'Lost'>) {
      state.statusFilter = action.payload;
    },
    updateBetStatus(state, action: PayloadAction<{ id: string; status: 'Pending' | 'Won' | 'Lost' }>) {
      const index = state.bets.findIndex(bet => bet.id === action.payload.id);
      if (index !== -1) {
        state.bets[index].status = action.payload.status;
      }
    },
  }
});

export const { setBets, setStatusFilter, updateBetStatus } = betsSlice.actions;

export const selectFilteredBets = (state: RootState) => {
  const { bets, statusFilter } = state.bets;
  return statusFilter === 'All' ? bets : bets.filter(bet => bet.status === statusFilter);
};

export default betsSlice.reducer;
