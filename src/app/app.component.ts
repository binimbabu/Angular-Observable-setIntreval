import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observable';
  timer :any;
  sampleObservable = new Observable((observer: any) => {
    let count = 0;
   this.timer =  setInterval(() => {
      console.log("Timer running");
      if (count <= 10) {
        observer.next(count);
        count++;
      }
      else {
        observer.complete();
      }
    }, 1000)
  })
  constructor() {
    this.sampleObservable.subscribe((result: any) => {
      console.log(result);
    },
      (error) => {
        console.log("error", error);
      },
      () => {
        console.log("Completed");
        clearInterval(this.timer);
      })
  }
}
