import {Component} from '@angular/core';
import {runCommand} from "@angular/cli/src/command-builder/command-runner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public jkUrl: string = 'https://media.karousell.com/media/photos/products/2020/10/9/jkjk_xs42_1602245175_1def7c28_progressive.jpg';

  public list: any[] = [{
    "title": 'new1'
  }, {
    "title": 'new2'
  }, {
    "title": 'new3'
  }]

  public title: string = 'My is title';

  public attr:string = 'blue';

  public flag: boolean = true;

  public orderStatus: number = 3;

  public today:any = new Date();

  public keywords:string = 'default';

  constructor() {
    console.log(this.today);
  }

  runCommand() {
    alert('自定义方法');
  }

  getData() {
    alert(this.title);
  }

  setData() {
    this.title = 'new title';
  }

  runEvent(event: any) {
    let dom:any = event.target;
    dom.style.color = 'red';
  }

  keyDown(e:any) {
    if (e.keyCode == 13) {
      console.log(e.target.value);
    }
  }

  keyUp(e:any) {
    if (e.keyCode == 13) {
      console.log(e.target.value);
    }
  }

  changeKeyWords(event:any) {
    this.keywords = "new keywords";
  }

}
