import { Component } from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller = false;
  title = 'operator';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIcon('ins', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ins.svg'));
    iconRegistry.addSvgIcon('tg', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tg.svg'));
    iconRegistry.addSvgIcon('vk', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vk.svg'));
    iconRegistry.addSvgIcon('wa', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/wa.svg'));
  }
}
