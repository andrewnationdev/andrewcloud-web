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
  selectedFile: IFile | null; 
}

const useFileStore = create<{data: IAndrewCloud } & IStoreActions>(persist((set) => ({
    data: {
        user: '',
        avatar: 'https://th.bing.com/th/id/OIP._Ub60e6muH_f6fAyfyZW8AHaEK?pid=ImgDet&rs=1',
        files: [],
        storageQuota: 0,
        selectedFile: null
    },
    updateData: (newData) => {
        set((s) => ({ data: { ...s.data, ...newData } }));
      },      
})), {
  name: "andrew-cloud-local"
});

export default useFileStore;
