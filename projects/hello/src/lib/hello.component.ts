import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'gl-hello',
  template: `
    <p>
      Hello! - Gino Luiggi
    </p>
  `,
  styles: [
  ]
})
export class HelloComponent implements OnInit {

  constructor(
    private helloService: HelloService
  ) { }

  ngOnInit(): void {
  }

}
