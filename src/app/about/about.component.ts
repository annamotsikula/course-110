import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, delay, filter, first, from, fromEvent, interval, last, map, mapTo, Observable, of, Subscribable, Subscription, take, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  myNumber = 200;
  @ViewChild("searchName") nameQuery!: ElementRef<HTMLInputElement>

  searchName = new FormControl<string>("")

  numList = [1, 2, 7, 100, 50, 234, 4356, 6]
  data = from(this.numList);

  searchKey = ""

  subscription!: Subscription

  // observable = new Observable((subscriber) => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   setTimeout(() => {
  //     subscriber.next(4);
  //     subscriber.complete();
  //   }, 2000);
  //   setTimeout(() => {
  //     subscriber.next(5);
  //     // subscriber.complete();
  //   }, 1000);
  // });

  ngAfterViewInit() {

    this.searchName.valueChanges.pipe(
      debounceTime(300),
    ).subscribe((result) => {
      console.log(result)
      if (result) {
        this.searchKey = result;

      }
    })

    // fromEvent(this.nameQuery.nativeElement, "keyup").pipe(
    //   debounceTime(300),
    //   map(ev => (ev.target as HTMLInputElement).value),
    // ).subscribe((result) => {
    //   console.log(result)
    //   this.searchKey = result;
    // }
    // );

  }
  ngOnInit() {
    console.log(this.data)


    // this.observable.subscribe((res) => console.log(res));

    //  this.subscription = interval(2000).pipe(
    //     map((res) => `Value Emitted: ${res}`)
    //   ).subscribe((res) => {
    //     console.log(res)
    //   });



    // this.data.pipe(
    //   // tap((res) => typeof res === "string" && console.log('String Value !!!') ),
    //   // take(1), 
    //   // first(),
    //   // last(),
    //   // map((res) => res*10 ),
    //   // toArray()
    //   // filter(data => data < 100),
    //   toArray(),
    //   delay(3000),


    // ).subscribe(result => {
    //   // console.log('Result below')
    //   console.log(result)

    // })


  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
