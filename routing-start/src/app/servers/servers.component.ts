import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private server: {id: number, name: string, status: string};
  
  constructor(private serversService: ServersService,
          private router: Router,
          private route: ActivatedRoute) { }

  ngOnInit() {
    //const id = this.route.snapshot.params['id'];    
    const id = +this.route.snapshot.params['id']; // + convert param to number
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) =>
      {
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onReload() {
   //this.router.navigate(['servers']);
  // relative to this current activated Route
   this.router.navigate(['/servers'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
