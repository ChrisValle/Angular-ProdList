import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 75;
    imageMargin: number = 3;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
     set listFilter(value:string) {
         this._listFilter = value;
         this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
     }

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "VR Headset",
            "productCode": "VRH-0011",
            "releaseDate": "March 19, 2018",
            "description": "VR headset",
            "price": 99.95,
            "starRating": 3.2,
            "imageUrl": "https://banner2.kisspng.com/20180326/ozw/kisspng-oculus-rift-virtual-reality-headset-htc-vive-plays-vr-headset-5ab9838b02c3c4.7258990915221072750113.jpg"
          },
          {
            "productId": 2,
            "productName": "Playstation 5",
            "productCode": "PSV-0023",
            "releaseDate": "December 18, 2020",
            "description": "5th edition of Sony Playstation",
            "price": 399.99,
            "starRating": 4.2,
            "imageUrl": "https://www.maxim.com/.image/t_share/MTQxMzc2MzQxMTE4Mjk3OTIz/sony-playstation-ps4-projpg.png"
          },
          {
            "productId": 5,
            "productName": "Final Fantasy VII: Remake",
            "productCode": "FF7-0048",
            "releaseDate": "August 30, 2021",
            "description": "Remake of Final Fantasy 7",
            "price": 59.99,
            "starRating": 4.8,
            "imageUrl": "https://cdn1-www.gamerevolution.com/assets/uploads/2015/06/final-fantasy-vii-remake.jpg"
          },
        {
            "productId": 8,
            "productName": "Self-Driving Car",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2023",
            "description": "A car that drives itself",
            "price": 39999.55,
            "starRating": 3.7,
            "imageUrl": "https://www.national.co.uk/tech-powers-google-car/extra/tech-powers-google-car/images/Car.png"
          },
          {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2019",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "https://www.pngkey.com/png/full/9-92871_game-controller-png-photo-video-game-controller-clipart.png"
          },
          {
            "productId": 1,
            "productName": "Apple iPhone 11",
            "productCode": "APL-011",
            "releaseDate": "March 1, 2020",
            "description": "11th edition of the Apple iPhone",
            "price": 299.95,
            "starRating": 4.5,
            "imageUrl": "https://clipart.info/images/ccovers/1505918647iphone-x-png.png"
          },
          {
            "productId": 1,
            "productName": "Amazon Drone",
            "productCode": "AMZ-009",
            "releaseDate": "January 11, 2020",
            "description": "Personalized Amazon Drone",
            "price": 1999.95,
            "starRating": 3.9,
            "imageUrl": "https://banner2.kisspng.com/20180418/ctq/kisspng-unmanned-aerial-vehicle-delivery-drone-quadcopter-drones-5ad6cdda0f3193.8530603815240268420622.jpg"
          },
          {
            "productId": 1,
            "productName": "Robot Butler",
            "productCode": "RBT-989",
            "releaseDate": "May 15, 2025",
            "description": "A robot that serves as a butler",
            "price": 4599.95,
            "starRating": 4.4,
            "imageUrl": "https://cacm.acm.org/system/assets/0001/2440/071513_MouthofMums_Robot-butler.large.jpg?1476779471&1373904359"
          },
        ];

        constructor() {
            this.filteredProducts = this.products;
            this.listFilter = '';
        }

        performFilter(filterBy: string): IProduct[] {
            filterBy = filterBy.toLocaleLowerCase();
            return this.products.filter((product: IProduct) =>
                    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }

        ngOnInit(): void {
            console.log('In OnInit');
        }
}