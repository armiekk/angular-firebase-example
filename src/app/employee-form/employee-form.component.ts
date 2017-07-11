import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {


  @Input() formModel: any;
  @Output() formModelChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private firebaseDB: FirebaseService
  ) { }

  ngOnInit() {
  }

  submitForm(e, payload) {
    e.preventDefault();
    if (payload.key) {
      this.firebaseDB.editData(payload)
        .then((val) => alert('แก้ไขข้อมูลสำเร็จ'))
        .catch(() => alert('เกิดข้อผิดพลาด'));
    } else {
      this.firebaseDB.addData(payload);
    }
  }

  clearForm() {
    this.formModel = {};
    this.formModelChange.emit({});
  }

}
