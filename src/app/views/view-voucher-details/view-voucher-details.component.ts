import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-voucher-details',
  templateUrl: './view-voucher-details.component.html',
  styleUrls: ['./view-voucher-details.component.scss']
})
export class ViewVoucherDetailsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  isChecked = false;
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
  constructor() { }

  ngOnInit(): void {
  }
  public checkUnCheckAll() {
    if (this.isChecked == true) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
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
