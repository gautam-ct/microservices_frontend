// shell-app/src/store.js
import create from 'zustand';

const useGlobalStore = create((set) => ({
  sharedState: null,
  updateSharedState: (state) => set({ sharedState: state }),
}));

export default useGlobalStore;
