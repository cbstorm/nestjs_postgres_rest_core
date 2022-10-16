export function NotFoundHandler(value: any) {
    if (!value) {
        throw new Error('Not Found');
    }
    return value;
}
