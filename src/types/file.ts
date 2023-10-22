export interface IFile {
    name: string;
    blob: Blob;
    size: number;
    lastModifiedDate: string;
    type: string;
}