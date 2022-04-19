import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
declare const $: any;

@Component({
  selector: 'app-pay-shroff-counter',
  templateUrl: './pay-shroff-counter.component.html',
  styleUrls: ['./pay-shroff-counter.component.scss'],
})
export class PayShroffCounterComponent implements OnInit {
  public data = [
    {
      digitCode: '23452563426',
      name: 'UOFHAoi OPIFJiop',
      nic: '23542562346V',
      amount: '498968',
      voucherType: 'XX',
    },
    {
      digitCode: '23452563426',
      name: 'UOFHAoi OPIFJiop',
      nic: '23542562346V',
      amount: '498968',
      voucherType: 'XX',
    },
    {
      digitCode: '23452563426',
      name: 'UOFHAoi OPIFJiop',
      nic: '23542562346V',
      amount: '498968',
      voucherType: 'XX',
    },
    {
      digitCode: '23452563426',
      name: 'UOFHAoi OPIFJiop',
      nic: '23542562346V',
      amount: '498968',
      voucherType: 'XX',
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
