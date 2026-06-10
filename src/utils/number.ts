export function createBoundedCenterRange(center: number, padding: number, leftBoundary: number, rightBoundary: number) {
    const start = Math.max(leftBoundary, center - padding);
    const end = Math.min(rightBoundary, center + padding);

    if (start > end) return [];

    const length = end - start + 1;

    return Array.from({ length }, (_, index) => start + index);
}