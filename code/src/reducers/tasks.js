import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      const { text, category, dueDate } = action.payload
      state.items.push({
        id: Date.now(), /* To get a specific id when adding new tasks */
        text,
        complete: false,
        category,
        dueDate,
      })
    },
    removeTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    markCompleted: (state, action) => {
      const foundTask = state.items.find((item) => item.id === action.payload)

      // Toogles between completed and not completed for the specific task
      if (foundTask) {
        foundTask.complete = !foundTask.complete
      };
    },
    removeAll: (state) => {
      state.items = []
    },
    removeCompleted: (state) => {
      const filteredList = state.items.filter((item) => !item.complete);
      state.items = filteredList
    },
    // Mark All button is not used right now
    markAll: (state) => {
      state.items.map((item) => (item.complete = !item.complete));
      state.items.map((task) => (task.complete = !task.complete));
    },
  }
});
