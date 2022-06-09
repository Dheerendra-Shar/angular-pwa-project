import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId:object) {
    
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      let navMain = document.getElementById('navbarCollapse')
      if (navMain){
        navMain.onclick = function(){
          if(navMain){
            navMain.classList.remove("show");
          }
        }
      }
    }
  }

}
