import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Titles } from 'src/app/models/titles';
import { TitlesService } from 'src/app/services/titles.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-tables',
  templateUrl: './ReportGeneration.component.html',
  styleUrls: ['./ReportGeneration.component.scss']
})


export class ReportGeneration implements OnInit {

  constructor(private titlesService: TitlesService) { }
  from!: NgbDateStruct;
  into!: NgbDateStruct;

  filter = {
    from: '',
    into: '',
    selectedFilter: 'none',
  }
  titlesData!: Array<Titles>
  ngOnInit() {

    this.titlesService.getAll().subscribe(
      response => {

      }
    )
  }

  findFilter(): void {
    const from = this.getSelectedDate(this.filter.from);
    const into = this.getSelectedDate(this.filter.into);

    const epochTimeFrom = from.getTime();
    const epochTimeInto = into.getTime();

    if (this.filter.from === '' || this.filter.from === '') {
      Swal.fire({
        icon: 'error',
        text: 'Date filter form cannot be empty.'
      })
    }
    else {
      var result: Array<Object> = [
      ]
      this.titlesService.getAll().subscribe(
        response => {

          for (let data of response) {
            var dataCreatedDate = new Date(data.createdAt!);
            if (dataCreatedDate.getTime() >= epochTimeFrom && dataCreatedDate.getTime() <= epochTimeInto) {
              result.push(data)
            }
          }

          this.titlesData = []
          console.log(result)
          this.titlesData = result
        }
      )
    }
  }

  getSelectedDate(from: string): Date {
    return new Date(from);
  }

  exportexcel(filename: string, element_name: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'Successfully download a report sheet',
    }).then((result) => {
      let element = document.getElementById(element_name);
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, `${filename}.xlsx`);
    })
    /* pass here the table id */


  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  model: NgbDateStruct;
}
