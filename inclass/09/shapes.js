/**
 * The shape types supported by this module.
 * @type{string[]}
 */
export const supportedShapes = ['circle', 'square', 'triangle'];
/**
 * Creates a shape that cna store dimesnion and calculate area
 * @param {string} type the kind of shape to create 
 */
export function Shape(type) {
    this.type = type.toLowerCase(); // holds circle
    // this is a function expression
    /**
     * Calculates the area of the shape
     * @returns {number | undefined} The area or undefined when dimensions are missing
     */
    this.area = function() {
        let result = undefined;
        if(this.dimensions) {
            // TODO: Base the calculations on the dimensions
            if (this.type === 'circle') {
            result = Math.PI * this.dimensions.radius ** 2;
        } else if (this.type === 'square') {
            result = this.dimensions.length ** 2;
        } else if (this.type === 'triangle') {
            result = this.dimensions.base * this.dimensions.height / 2;
        }
        }
        return result;
    }
    this.dimensions = undefined;
    /**
     * Stores the dimensions for needed for this shape
     * @param {object} dimensions The dimensions for the current shape
     */
    this.assignDimensions = function(dimensions) {// {radius:5}
        // Note: We'll accept the following
        // - `radius` for circles
        // - `length` for squares
        // - `base` and `height` for triangles 
        if (!supportedShapes.includes(this.type)) {
            this.dimensions = undefined;
            console.error(`${this.type} is not a supported shape.`);
            return;
        }
        if (this.type === 'circle' && typeof dimensions.radius === 'number') {
            this.dimensions = {
                radius: dimensions.radius
            };
        } else if (this.type === 'square' && typeof dimensions.length === 'number') {
            this.dimensions = {
                length: dimensions.length
            };
        } else if (this.type === 'triangle' && typeof dimensions.base === 'number' && typeof dimensions.height === 'number') {
            this.dimensions = {
                base: dimensions.base,
                height:dimensions.height
            };
        } else {
            this.dimensions = undefined;
            console.error(`${this.type} is not a supported shape.`);
        }
    }
}
