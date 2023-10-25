export interface IFile {
    name: string;
    blob: string | ArrayBuffer | null;
    size: number;
    lastModifiedDate: string | number;
    type: string;
    isFolder?: boolean;
    folderFiles?: IFolder[];
}

type IFolder = IFile;