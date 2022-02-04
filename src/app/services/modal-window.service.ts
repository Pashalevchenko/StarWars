import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  constructor(config: NgbModalConfig, private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content);
  }
}
