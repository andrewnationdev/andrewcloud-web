import create from 'zustand';
import {IFile} from '../types/file';

interface IStoreActions {
  updateData: (newData: IAndrewCloud) => void;
}

interface IAndrewCloud {
  user: string;
  avatar: string;
  files: IFile[];
  storageQuota: number;
}

const useFileStore = create<{data: IAndrewCloud } & IStoreActions>((set) => ({
    data: {
        user: '',
        avatar: '',
        files: [],
        storageQuota: 0
    },
    updateData: (newData) => {
        set((s) => ({ data: { ...s.data, ...newData } }));
      },      
}));

export default useFileStore;
