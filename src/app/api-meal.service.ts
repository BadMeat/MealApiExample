import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private httpClient: HttpClient) {}

  apiCall(){
    // response
    // {
    //   "meals":[
    //      {
    //         "strMeal":"Baked salmon with fennel & tomatoes",
    //         "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg",
    //         "idMeal":"52959"
    //      },
    //   ]
    // }
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  }
}
