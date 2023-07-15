import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://randomfox.ca/images/1.jpg"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://randomfox.ca/images/2.jpg"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://randomfox.ca/images/3.jpg"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://randomfox.ca/images/4.jpg"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://randomfox.ca/images/5.jpg"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://randomfox.ca/images/6.jpg"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://randomfox.ca/images/7.jpg"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://randomfox.ca/images/8.jpg"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://randomfox.ca/images/9.jpg"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://randomfox.ca/images/10.jpg"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://randomfox.ca/images/11.jpg"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://randomfox.ca/images/12.jpg"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
