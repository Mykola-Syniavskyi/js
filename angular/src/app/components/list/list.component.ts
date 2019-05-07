import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  //template: '<button>Magic</button>',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    ShareService
  ]
})
export class ListComponent implements OnInit {

  title = 'Hello Angular';
  

  new_item = '';

  constructor(private ss: ShareService) {}

  ngOnInit() {
  }

  add() {
    this.ss.add(this.new_item);
    this.new_item = '';
  }

  remove(index) {
    this.ss.list.splice(index, 1);
  }
  change_order(i){
    console.log(this.ss.list[i]);
   var it=this.ss.list[i].split('',);console.log(it)
   var rev=it.reverse();console.log(rev);
    this.ss.list[i]= rev.join('');console.log(this.ss.list[i]);
    
  
  }

  get count_items() {
    return this.list.length;
  }

  get list() {
    return this.ss.list;
  }

  set list(val) {
    console.log(val);
  }

  count_items2() {
    return 'asdasd';
  }

}
