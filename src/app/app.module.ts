import { MyProfilModule } from './pages/my-profil/my-profil.module';
import { SkillsModule } from './pages/skills/skills.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MyProfilModule,
        SkillsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
