import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertTSopacesPipe } from './convert-to-spaces.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent, ConvertTSopacesPipe],
  imports: [CommonModule],
  exports: [
    StarComponent,
    CommonModule,
    ConvertTSopacesPipe,
    BrowserModule,
    FormsModule,
  ],
})
export class SharedModule {}
