import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-journal-entries',
  templateUrl: './create-journal-entries.component.html',
  styleUrls: ['./create-journal-entries.component.scss']
})
export class CreateJournalEntriesComponent implements OnInit {

  public data = [
    {
      digitCode: '23452563426',
      name: 'UOFHAoi OPIFJiop',
      nic: '23542562346V',
      amount: '498968',
      date: '2022-02-22',
    },
    {
      digitCode: '23452563426',
      name: 'UOFHAoi OPIFJiop',
      nic: '23542562346V',
      amount: '498968',
      date: '2022-02-22',
    },
    {
      digitCode: '23452563426',
      name: 'UOFHAoi OPIFJiop',
      nic: '23542562346V',
      amount: '498968',
      date: '2022-02-22',
    },
    {
      digitCode: '23452563426',
      name: 'UOFHAoi OPIFJiop',
      nic: '23542562346V',
      amount: '498968',
      date: '2022-02-22',
    },
  ];
  dtOptions: DataTables.Settings = {};
  isChecked = false;
  constructor() {}
  public checkUnCheckAll() {
    if (this.isChecked == true) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
  }
  calcSelectedTotalAmount() {}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      searching: false,
      pageLength: 5,
      lengthMenu: [
        [5, 10, 20, -1],
        [5, 10, 20, 'All'],
      ],
      processing: true,
    };
  }
  confirmBox() {
    Swal.fire({
      title: 'Pay?',
      text: 'Amount to be paid <<>> amount received',
      icon: 'warning',
      input: 'text',
      inputLabel: 'Amount',
      showCancelButton: true,
      confirmButtonText: 'Pay',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Paid',
          'Amount has been paid.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The amount has not been paid.', 'error');
      }
    });
  }


}
