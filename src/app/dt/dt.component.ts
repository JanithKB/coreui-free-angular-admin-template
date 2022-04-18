import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-dt',
  templateUrl: './dt.component.html',
  styleUrls: ['./dt.component.scss']
})
export class DtComponent implements OnInit,AfterViewInit {
  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngAfterViewInit(): void {
    $('#example').DataTable();
  }

  ngOnInit(): void {
    this.dtOptions = {

      pagingType: 'full_numbers',

      pageLength: 5,

      processing: true

    };
  }

}
