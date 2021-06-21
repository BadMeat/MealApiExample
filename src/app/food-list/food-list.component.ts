import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-meal.service';
import { SeaFood } from '../model/sea-food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  constructor(private api: ApiServiceService) {}

  datas: SeaFood[] = [];
  isLoading = true;

  async ngOnInit() {
    console.log('data dipanggil');
    await this.callApi();
    // ketika callApi() selesai dijalankan baru log ini keluar
    console.log('data selesai');
  }

  async callApi() {
    // Ini kalau memanggil servicenya tidak harus menunggu sampai dapat response, method juga tidak perlu async
    // this.api.apiCall().subscribe((data: any) => {
    //   this.datas = [...data.meals];
    //   this.isLoading = false;
    // });

    // ini Kalau harus menunggu service terlebih dahulu
    const dataApi: any = await this.api.apiCall().toPromise();
    if (dataApi.meals) {
      this.datas = [...dataApi.meals];
      this.isLoading = false;
      console.log('data terpanggil');
    }
  }
}
