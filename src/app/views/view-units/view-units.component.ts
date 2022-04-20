import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-view-units',
  templateUrl: './view-units.component.html',
  styleUrls: ['./view-units.component.scss']
})
export class ViewUnitsComponent implements OnInit {
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
