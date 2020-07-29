import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TambahDataComponent} from './tambah-data/tambah-data.component';
import {DetailAlamatComponent} from './detail-alamat/detail-alamat.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
  public dialog:MatDialog
  ){}

  buatAlamat()
  {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog ditutup');     
    });
  }

   detailAlamat()
    {
      const dialogRef = this.dialog.open(DetailAlamatComponent, {
        width: '450px',      
      }); 
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');     
      });
    }

}
