import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try-three',
  templateUrl: './try-three.component.html',
  styleUrls: ['./try-three.component.scss']
})
export class TryThreeComponent implements OnInit {
  items = [{value: 0}];

  constructor() {}

  ngOnInit(): void {
    return;
  }

  add(): void {
    this.items.push({ value: 0 });
  }
  //push คือ ต่อท้าย

  delete(index: number): void {
    this.items.splice(index, 1);
  }
  //splice เปลี่ยน array ตัวเดิม

  getResult(): string {
    return this.items.map((item) => item.value).join(', ');
  }
  //map สร้าง array ตัวใหม่

  onChange(index: number, value: number): void {
    this.items[index].value = value;
  }

}


