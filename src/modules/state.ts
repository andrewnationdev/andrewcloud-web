import create from 'zustand';

interface IFiles {
    data: {
        none: string;
    }
}

interface IStoreActions {
  updateData: (newData: IAPIResponse) => void;
}

const useFileStore = create<{data: IFiles} & IStoreActions>((set) => ({
    data: {
        none: string
    },
    updateData: (newData) => {
        set((s) => ({ data: { ...s.data, ...newData } }));
      },      
}));

export default useFileStore;
