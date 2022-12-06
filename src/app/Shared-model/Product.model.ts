export class Product{
    public Id!:number;
    public Name!:string;
    public ShortDescription!:string;
    public LongDescription!:string;
    public Name_Eng!:string;
    public ShortDescription_Eng!:string;
    public LongDescription_Eng!:string;
    public ProductCategory!:ProductCategory;
    public MainImageUrl!:string;
    public CoverImages!:string;
}
export class ProductCategory{
    public Id!:number;
    public Name!:string;
    public Name_Eng!:string;
    public ImageUrl!:string;
}
