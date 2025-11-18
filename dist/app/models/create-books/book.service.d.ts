import { BookInterface } from "./book.interface";
export declare const bookService: {
    createBookService: (bookData: BookInterface) => Promise<(import("mongoose").Document<unknown, {}, BookInterface, {}, {}> & BookInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        success: boolean;
        error: string;
    }>;
    getAllBooksService: () => Promise<(import("mongoose").Document<unknown, {}, BookInterface, {}, {}> & BookInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[] | {
        success: boolean;
        error: string;
    }>;
    getBookByIdService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, BookInterface, {}, {}> & BookInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        success: boolean;
        error: string;
    } | null>;
    updateBookByIdService: (id: string, bookData: BookInterface) => Promise<(import("mongoose").Document<unknown, {}, BookInterface, {}, {}> & BookInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        success: boolean;
        error: string;
    } | null>;
    deleteBookByIdService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, BookInterface, {}, {}> & BookInterface & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        success: boolean;
        error: string;
    } | null>;
};
//# sourceMappingURL=book.service.d.ts.map