import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillsComponent } from '@skills/components/skills.component';
import { MatDividerModule } from '@angular/material/divider';

const MATERIALS = [MatDividerModule];
@NgModule({
    declarations: [SkillsComponent],
    imports: [CommonModule, MatDividerModule],
    exports: [SkillsComponent],
})
export class SkillsModule {}
