export interface IFile {
    name: string;
    blob: string | ArrayBuffer | null;
    size: number;
    lastModifiedDate: string | number;
    type: string;
}