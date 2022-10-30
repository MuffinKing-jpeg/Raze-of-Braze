import { Component, OnInit } from '@angular/core';
import {LocaleService} from "../../../services/locale.service";
import {LocaleInterface} from "../../../interfaces/locale.interface";

@Component({
  selector: 'app-locale-btn',
  templateUrl: './locale-btn.component.html',
  styleUrls: ['./locale-btn.component.scss']
})
export class LocaleBtnComponent implements OnInit {
  public localeList:LocaleInterface['locale'][] = ['en','ua','ru']



  constructor(public locale: LocaleService) { }

  ngOnInit(): void {

  }



}
