import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  coins(){
    this.router.navigate(['profile'], {relativeTo:this.route});
  }
notes(){
    this.router.navigate(['inventory'], {relativeTo:this.route});
  }
  ngOnInit() {
  }

}
