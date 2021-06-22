import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

//Angular Material Components
import { LayoutModule } from '@angular/cdk/layout';
 
   
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatInputModule} from '@angular/material/input';
 import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
 
 import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
 import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
 
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
// 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
const materialComponents=[
  MatButtonToggleModule,MatGridListModule, 
  MatIconModule,MatMenuModule, 
  MatBadgeModule,MatSidenavModule,MatDividerModule,
  MatButtonModule,MatToolbarModule, MatSidenavModule,
   MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatCheckboxModule,
   MatSelectModule,
   MatRadioModule,
   MatCardModule,
    
   MatMenuModule,MatSidenavModule ,
   MatIconModule, 
   LayoutModule ,BrowserModule,
   BrowserAnimationsModule,
     MatButtonModule,
   MatInputModule,
   MatAutocompleteModule,
   MatDatepickerModule,
   MatFormFieldModule,
   MatRadioModule,
   MatSelectModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatMenuModule,
   MatSidenavModule,
   MatToolbarModule,
   MatListModule,
   MatGridListModule,
   MatCardModule,
   MatStepperModule,
   MatTabsModule,
   MatExpansionModule,
   MatButtonToggleModule,
   MatChipsModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatProgressBarModule,
   MatDialogModule,
   MatTooltipModule,
   MatSnackBarModule,
   MatTableModule,
   MatSortModule,
   MatPaginatorModule

];

@NgModule({
  exports: [
   materialComponents
 
 
  ],
  imports: [
    materialComponents
  ]
})
export class MaterialModule { }
 