import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FixedpluginComponent } from './components/fixedplugin/fixedplugin.component';

@Component({
  selector: 'admin-module-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements AfterViewInit  {
  
  @ViewChild(FixedpluginComponent, { static: false }) colorFixer : FixedpluginComponent;
  
  constructor(){
    this.loadAdminStyles()
  }
  ngAfterViewInit(){
    this.colorFixer = new FixedpluginComponent();
    this.colorFixer.changeSidebarColor('black');
    this.colorFixer.changeSidebarActiveColor('primary');
  }

  private loadAdminStyles() {
    return new Promise((resolve, reject) => {
      const styleElement = document.createElement('link');
      styleElement.href = 'admin-style.scss';
      styleElement.onload = resolve;
      document.head.appendChild(styleElement);
    });
  }
}
