import {Component, OnInit} from '@angular/core';
import {ThemeService} from './services/theme.service';
import {NavbarStateService} from "./services/navbar-state.service";
import {Router} from "@angular/router";
import {LocaleService} from "./services/locale.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private themeService: ThemeService,
    public navState: NavbarStateService,
    public router: Router,
    private locale:LocaleService) {
  }

  ngOnInit() {
    this.themeService.checkTheme();
    setTimeout(()=> {
      this.locale.getLocale()
    }, 10)
  }
}
