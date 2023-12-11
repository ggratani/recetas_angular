export interface RecipeModel {
    name: string;
    description: string;
    ingredients: Array<any>;
    imagePath: string;
    _id: string | number;
}