import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TemplateViewComponent } from './components/template-view/template-view.component';
import { CustomViewComponent } from './components/custom-view/custom-view.component';
import { CharacterSelectComponent } from './components/template-view/character-select/character-select.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { InitialsComponent } from './components/initials/initials.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateViewComponent,
    AvatarComponent,
    MenuComponent,
    CustomViewComponent,
    CharacterSelectComponent,
    InitialsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    NgxMatColorPickerModule,
    MatCheckboxModule,
    MatIconModule,
    ],
  exports: [MatInputModule, MatFormFieldModule],
  providers: [
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
