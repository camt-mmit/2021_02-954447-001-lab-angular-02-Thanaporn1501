import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab05',
  templateUrl: './lab05.component.html',
  styleUrls: ['./lab05.component.scss'],
})
export class Lab05Component implements OnInit {
  sections = [
    {
      items: [
        {
          value: 0,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    return;
  }

  addInput(section: any): void {
    section.items.push({ value: 0 });
  }

  addSection(): void {
    this.sections.push({
      items: [
        {
          value: 0,
        },
      ],
    });

    console.log(this.sections);
  }

  deleteSection(index: number): void {
    this.sections.splice(index, 1);
  }
  deleteItem(section:any,index: number): void {
    section.items.splice(index, 1);
  }

  getResult(section: any): string {
    return section.items.reduce((total: number, item: any) => total + item.value, 0);
  }

  onChange(section: any, index: number, value: number): void {
    section.items[index].value = value;
  }
}
