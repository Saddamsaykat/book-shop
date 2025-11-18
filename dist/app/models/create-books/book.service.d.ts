import { BookInterface } from "./book.interface";
export declare const bookService: {
    createBook: (bookData: BookInterface) => Promise<(import("mongoose").Document<unknown, {}, BookInterface, {}, {}> & BookInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        success: boolean;
        error: string;
    }>;
};
//# sourceMappingURL=book.service.d.ts.map