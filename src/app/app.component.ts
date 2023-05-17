import { Component } from '@angular/core';
import {  } from '@ngrx/effects/src/utils';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>){
    this.count$ = store.select('count');
  }

  clear() {
    this.store.dispatch(reset());
  }
  decrease() {
    this.store.dispatch(decrement());
  }
  increase() {
    this.store.dispatch(increment());
  }
}
