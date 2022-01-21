import { Observable, range } from "rxjs";
import {map, filter} from 'rxjs/operators'



class OperatorTest{
   source$: Observable<number> = range(0,20);

  source$.pipe(
    map(x => x*3)
    filter(x => x%2 === 0)
  ).subscribe(x => console.log(x));)

}
