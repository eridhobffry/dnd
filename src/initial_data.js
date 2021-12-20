import { nanoid } from "nanoid";

export const InitialData = {
    categoryId: nanoid(),
    category: [
        {
            id: nanoid(),
            name: 'services',
            open: false,
        },
        {
            id: nanoid(),
            name: 'cases',
            open: true,
        },
    ],
}