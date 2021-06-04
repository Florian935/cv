import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillsComponent } from '@skills/components/skills.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MATERIALS = [MatDividerModule, MatProgressBarModule];
@NgModule({
    declarations: [SkillsComponent],
    imports: [CommonModule, MATERIALS],
    exports: [SkillsComponent],
})
export class SkillsModule {}
