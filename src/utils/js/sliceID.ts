export const sliceID =
    (ids: string[]) =>
    (page: number, limit: number): string[] => {
        const from = page * limit - limit
        const to = page * limit
        return ids.slice(from, to)
    }
