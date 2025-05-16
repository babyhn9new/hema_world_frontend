import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationResponseDto, ApplicationCreateDto, ApplicationUpdateDto } from '../types/api';
import { applicationApi } from '../services/api';

interface ApplicationsState {
  items: ApplicationResponseDto[];
  loading: boolean;
  error: string | null;
}

const initialState: ApplicationsState = {
  items: [],
  loading: false,
  error: null,
};

export const createApplication = createAsyncThunk(
  'applications/create',
  async (data: ApplicationCreateDto) => {
    return await applicationApi.create(data);
  }
);

export const fetchApplications = createAsyncThunk(
  'applications/fetchAll',
  async () => {
    return await applicationApi.getAll();
  }
);

export const updateApplicationStatus = createAsyncThunk(
  'applications/updateStatus',
  async ({ id, data }: { id: number; data: ApplicationUpdateDto }) => {
    await applicationApi.updateStatus(id, data);
    return { id, status: data.status };
  }
);

export const deleteApplication = createAsyncThunk(
  'applications/delete',
  async (id: number) => {
    await applicationApi.delete(id);
    return id;
  }
);

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create application
      .addCase(createApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create application';
      })
      // Fetch applications
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch applications';
      })
      // Update application status
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        const application = state.items.find(item => item.id === action.payload.id);
        if (application) {
          application.status = action.payload.status;
        }
      })
      // Delete application
      .addCase(deleteApplication.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default applicationsSlice.reducer; 