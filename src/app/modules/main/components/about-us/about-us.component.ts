import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  
constructor(private scrollService: ScrollService,
  ){}
  headerHeight!:number
  ngOnInit(): void {
  setTimeout(() => {
    this.scrollService.scrollToSection()
  }, 200);

  }
}
