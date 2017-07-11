import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  dataList: any[] = [];
  rowData: any = {};

  constructor(
    private firebaseDB: FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseDB
      .getDataList()
      .subscribe((value) => {
        this.dataList = value;
      });
  }
  
  receiveRowData(rowData){
    this.rowData = rowData;
  }

  receiveDeleteKey(key) {
    this.firebaseDB.deleteData(key);
  }

}
