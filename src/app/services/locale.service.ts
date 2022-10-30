import { Injectable } from '@angular/core';
import {LocaleInterface} from "../interfaces/locale.interface";
import {timeout} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  public activeLocale:LocaleInterface['locale']

  constructor() { }

  public getLocale():void{
    const currentPath = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1')

    if (localStorage.getItem('locale')) {
      const storagePath = localStorage.getItem('locale')
      switch (storagePath) {
        case  'en' || 'ru' || 'ua':
          if (storagePath !== currentPath) this.changeLocale(storagePath)
          this.activeLocale = storagePath
          break;
        default:
          setTimeout(()=>{
            localStorage.removeItem('locale')
            this.getLocale()
          },100)
      }
    }

    else {
       switch (currentPath) {
        case  'en' || 'ru' || 'ua':
          this.activeLocale = currentPath
          break;
        default:
          setTimeout(() => {
            this.getLocale()
          }, 100)
      }
    }
  }

  changeLocale(loc: string): void {
    if (loc !== '') {
      localStorage.setItem('locale', loc)
      const pathname = window.location.pathname.replace(/^\/\w+/, loc)
      const url = new URL(window.location.href)
      url.pathname = pathname
        window.location.replace(url)
    }
  }
}
