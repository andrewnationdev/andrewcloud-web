import create from 'zustand';
import { IFile } from '../types/file';
import { persist } from 'zustand/middleware';

interface IStoreActions {
  updateData: (newData: IAndrewCloud) => void;
}

interface IAndrewCloud {
  user: string;
  avatar: string;
  files: IFile[];
  storageQuota: number;
  selectedFile: IFile | null;
}

const useFileStore = create<IAndrewCloud & IStoreActions>(
  persist(
    (set) => ({
      user: '',
      avatar: 'https://th.bing.com/th/id/OIP._Ub60e6muH_f6fAyfyZW8AHaEK?pid=ImgDet&rs=1',
      files: [],
      storageQuota: 0,
      selectedFile: null,
    }),
    {
      name: 'andrew-cloud-local',
      getStorage: () => localStorage.getItem('yourLocalStorageKey'),
      onRehydrateStorage: (value) => {
        if (value) {
          set(value); // Update the entire state with the retrieved value
        }
      },
    }
  )
);

export default useFileStore;
