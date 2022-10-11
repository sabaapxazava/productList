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
//{
//     "Id": 20,
//     "Name": "ორგანული ინდური ჩაი",
//     "ShortDescription": "Clipper",
//     "LongDescription": "<p>ორგანული ინდური ჩაი</p><p><strong>ინგრედიენტები</strong>: *შავი ჩაი, *დარიჩინი(17%), *ფორთოხლის კანი, *მიხაკი(8%), *კამის თესლი(5%). *-ორგანული.&nbsp;</p><p>წარმოშობის ადგილი: ინგლისი</p><p>წარმოებულია იმპორტირებული ნედლეულით</p><p>შენახვის პირობები: შეინახეთ მშრალ, გრილ ადგილზე.&nbsp;</p><p>&nbsp;მწარმოებელი: კლიპერი&nbsp;</p><p>იმპორტიორი: შპს ევროპროდუქტი, გაგრის ქუჩა, თბილისი.</p>",
//     "Name_Eng": null,
//     "ShortDescription_Eng": "",
//     "LongDescription_Eng": "",
//     "ProductCategory": {
//         "Id": 28,
//         "Name": "ბაკალეა",
//         "Name_Eng": null,
//         "ImageUrl": ""
//     },
//     "MainImageUrl": "https://europroductcms.azurewebsites.net/Public/282f940d-a421-4092-9a10-8d0dab89d735.jpeg",
//     "CoverImages": [
//         "https://europroductcms.azurewebsites.net/Public/e02b48e7-a42d-4e3a-b8c3-1721a550e22f.png"
//     ],
//     "OtherCategories": [
//         {
//             "Id": 8,
//             "Name": "ორგანული",
//             "Name_Eng": null,
//             "ImageUrl": ""
//         },
//         {
//             "Id": 15,
//             "Name": "უალკოჰოლო სასმელები",
//             "Name_Eng": null,
//             "ImageUrl": ""
//         }
//     ]