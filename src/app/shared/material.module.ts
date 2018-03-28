import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,    
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,    
    MatListModule,    
    MatSelectModule } from '@angular/material';
@NgModule({
    imports: [        
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,        
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,       
        MatListModule,        
        MatSelectModule
    ],
    exports: [
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatSelectModule,
    ]
})
export class MaterialModule {}