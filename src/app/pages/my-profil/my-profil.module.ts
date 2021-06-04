import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfilComponent } from '@my-profil/components/my-profil.component';
import { MatIconModule } from '@angular/material/icon';

const MATERIALS = [MatIconModule];

@NgModule({
    declarations: [MyProfilComponent],
    imports: [CommonModule, MATERIALS],
    exports: [MyProfilComponent],
})
export class MyProfilModule {}
