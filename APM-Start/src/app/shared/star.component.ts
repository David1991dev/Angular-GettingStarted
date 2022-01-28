import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ProductListComponent } from '../products/product-list.component';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() productName: string = 'null';
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(
      `The rating of ${this.productName} is ${this.rating}`
    );
    console.log(`The rating of ${this.productName} is ${this.rating}`);
    this.notify.emit('clicked!');
  }
}
