export {}

declare global {
    interface Window {
        api?: {
            saveNote: (data: { noteId: string; content: unknown }) => void;
            readNote: (noteId: string | number) => Promise<any>
        }
    }
}