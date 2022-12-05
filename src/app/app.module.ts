import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitialsFormComponent } from './components/initials-form/initials-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AvatarComponent } from './components/initials-form/avatar/avatar.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { service } from './services/service';
import { MenuComponent } from './components/menu/menu.component';
import { AvatarsFormComponent } from './components/avatars-form/avatars-form.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialsFormComponent,
    AvatarComponent,
    MenuComponent,
    AvatarsFormComponent,
    CustomFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    NgxMatColorPickerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule
    ],
  exports: [MatInputModule, MatFormFieldModule],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }, service],
  bootstrap: [AppComponent]
})
export class AppModule { }
