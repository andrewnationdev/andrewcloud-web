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

const useFileStore = create<{ data: IAndrewCloud } & IStoreActions>(
  persist((set) => ({
    data: {
      user: '',
      avatar: 'https://th.bing.com/th/id/OIP._Ub60e6muH_f6fAyfyZW8AHaEK?pid=ImgDet&rs=1',
      files: [],
      storageQuota: 0,
      selectedFile: null,
    },
  }),
  {
    name: "andrew-cloud-local",
  }
  )
);

export default useFileStore;
