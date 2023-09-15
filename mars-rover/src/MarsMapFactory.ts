export class MarsMapFactory {

    createMarsMap(width: number, height: number) {
        return new Array(height).fill(
            new Array(width).fill(0)
        )
    }
}