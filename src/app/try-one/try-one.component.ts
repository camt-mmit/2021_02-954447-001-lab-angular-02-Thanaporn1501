import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try-one',
  templateUrl: './try-one.component.html',
  styleUrls: ['./try-one.component.scss']
})
export class TryOneComponent implements OnInit {
  items = [0, 0];

  constructor() {}

  ngOnInit(): void {
    return;
  }

  onChange(index: number, value: number): void {
    this.items[index] = value;
    this.items = [...this.items];
    console.debug(this.items);
    }
}
//... เป็น space operator ดึงค่า element มาทุกตัว แล้วก็เอามาใส่ไว้
