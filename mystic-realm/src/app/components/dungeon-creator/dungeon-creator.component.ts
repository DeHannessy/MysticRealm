import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dungeon-creator',
  templateUrl: './dungeon-creator.component.html',
  styleUrls: ['./dungeon-creator.component.css']
})
export class DungeonCreatorComponent implements OnInit {
  public dungeon = [
    ["0", "0", "0", "0", "0", "0", "0"], 
    ["0", "0", "0", "0", "0", "0", "0"], 
    ["0", "0", "0", "0", "0", "0", "0"], 
    ["0", "0", "0", "0", "0", "0", "0"], 
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public changeColor(row: number, block: number) {
    this.dungeon[row][block] = this.dungeon[row][block] === "0" ? "1" : "0";
  }

  public getColor(row: number, block: number) {
    return this.dungeon[row][block] === "0" ? "background: white;" : "background: black; border-color: white;";
  }
}
