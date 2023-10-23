import create from 'zustand';
import {IFile} from '../types/file';

interface IStoreActions {
  updateData: (newData: IAndrewCloud) => void;
}

interface IAndrewCloud {
  user: string;
  avatar?: string;
  files?: IFile[];
  storageQuota?: number;
  selectedFile?: IFile | null; 
}

const useFileStore = create<{data: IAndrewCloud } & IStoreActions>((set) => ({
    data: {
        user: '',
        avatar: '',
        files: [],
        storageQuota: 0,
        selectedFile: null
    },
    updateData: (newData) => {
        set((s) => ({ data: { ...s.data, ...newData } }));
      },      
}));

export default useFileStore;
