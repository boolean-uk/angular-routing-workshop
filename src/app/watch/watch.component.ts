import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  @Input() id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      // this.id = this.route.snapshot.params['id'];
      this.route.params.subscribe(params => {
          this.id = params['id'];
      });
  }

}
