import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'ngb-modal';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ModalComponent>) { }

  title: string | null = null
  ngOnInit(): void {
    console.log()
  }

  deliteFromFavList(){
    // this.active.close()
  }

  

}
