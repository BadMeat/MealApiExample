# MealApiExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# 1. Install 

**Install Angular**
      
    npm install -g @angular/cli@latest

**Create Project**

    ng new nama-project


**Running**

    ng serve


**Untuk specifict running ip**

    ng serve --host=192.168.100.3 --port=4545
    urlnya:  http://192.168.100.3:4545/

# 2. Component 

    ng g c food-list

### Penggunaan
Untuk memanggil component di component lain yaitu dengan memanggil selectornya, misal app.component ingin memanggil servers component maka
Lihat dulu selector servers.ts, yaitu :
```ts
@Component({
  selector: 'app-servers',
  ...
})
```

di app.component.html
```html
<app-servers></app-servers>
```

### Untuk Create Component Tp Skip Test
    ng g c food-list --skipTests=true
---    
!!! note food-list.component.ts
```ts
import { ApiServiceService } from '../api-meal.service';

callApi() {
  this.api.apiCall().subscribe((data: any) => {
    this.datas = [...data.meals];
    this.isLoading = false;
  });
}
```
!!!

    Ini kalau memanggil servicenya tidak harus menunggu sampai dapat response
    
---
!!! note food-list.component.ts
```ts
  async callApi() {
    const dataApi: any = await this.api.apiCall().toPromise();
    if (dataApi.meals) {
      this.datas = [...dataApi.meals];
      this.isLoading = false;
    }
  }
```
!!!

# 3. Service

### Create Service
    ng g s api-meal
    
!!! note api-meal.service.ts
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private httpClient: HttpClient) {}

  apiCall(){
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  }
}
```
!!!

    import { HttpClient } from '@angular/common/http'; ini sudah bawaan dari angular
    private httpClient: HttpClient, di inject di constructornya
    apinya: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
	
# 4. Model

!!! note SeaFood.ts
```ts
export class SeaFood {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

```
!!!

    struktur model dari response
---
!!! note tsonconfig.json
```json
{
  "compilerOptions": {
    ...
    "strict": false,
    ..
  },
}
```
!!!

    rubah strict menjadi false, supaya waktu membuat model tidak perlu implement construnctor
	
# 5. Boostrap
### Install
    npm install --save bootstrap@4

!!! note angular.json
```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  ...
],
```
!!!

    Memakai boostrap 4 untuk tampilannya
    tambahakan code diatas di angular.json untuk import boostrapnya

# 6. Icon

    tambahkan favicon.png, sejajar dengan index.html di dalam forlder src
    
!!! note index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
    <link rel="icon" type="image/png" href="favicon.png" />
  </head>
  ...
</html>
```
!!!

    Ubah menjadi <link rel="icon" type="image/png" href="favicon.png" />
---
!!! note angular.json
```json
"architect": {
  "build": {
    "builder": "@angular-devkit/build-angular:browser",
    "options": {
      "outputPath": "dist/meal-api-example",
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": "src/polyfills.ts",
      "tsConfig": "tsconfig.app.json",
      "assets": ["src/favicon.png", "src/assets"],
      "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
```
!!!

    "assets": ["src/favicon.png", "src/assets"], rubah menjadi seperti ini