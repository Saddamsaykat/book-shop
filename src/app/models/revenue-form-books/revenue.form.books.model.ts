import { Schema } from "mongoose";
import { RevenueFormBooksInterface } from "./revenue.form.books.interface";

export const revenueFormBookSchema = new Schema<RevenueFormBooksInterface>({
    totalRevenue: {
        type: Number,
        required: true,
    },
});