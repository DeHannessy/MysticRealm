import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realm-creator',
  templateUrl: './realm-creator.component.html',
  styleUrls: ['./realm-creator.component.css']
})
export class RealmCreatorComponent implements OnInit {
  public realm = [
    ["1", "1", "", "", "", "", "", "", "", "", "", "", "1", "1", "", "", "", "", "", "", "1", "1", "1", "1", "", "", "", "", "", "", "1", "1"],
    ["1", "1", "", "", "pink", "blue", "", "", "blue", "blue", "", "", "1", "1", "", "", "", "", "", "", "1", "1", "1", "1", "", "", "", "", "", "", "1", "1"],
    ["", "", "", "", "1", "1", "", "", "1", "1", "", "", "", "", "", "", "1", "1", "", "", "", "", "", "", "", "", "1", "1", "", "", "", ""],
    ["", "", "yellow", "", "1", "1", "", "", "1", "1", "", "", "pink", "", "", "", "1", "1", "", "", "blue", "pink", "", "", "", "", "1", "1", "", "", "", "yellow"],
    ["", "", "1", "1", "1", "1", "blue", "pink", "1", "1", "1", "1", "1", "1", "", "", "", "", "", "", "1", "1", "1", "1", "", "", "", "", "", "", "1", "1"],
    ["", "", "1", "1", "1", "1", "", "", "1", "1", "1", "1", "1", "1", "", "blue", "", "", "", "pink", "1", "1", "1", "1", "", "", "", "", "", "", "1", "1"],
    ["", "blue", "1", "1", "", "", "", "", "", "", "", "", "", "", "1", "1", "", "", "1", "1", "1", "1", "", "", "", "", "1", "1", "blue", "", "", ""],
    ["", "blue", "1", "1", "", "", "", "", "", "", "blue", "blue", "", "", "1", "1", "", "", "1", "1", "1", "1", "", "", "", "pink", "1", "1", "blue", "", "", ""],
    ["", "", "", "", "", "", "1", "1", "", "", "1", "1", "", "", "", "", "", "", "1", "1", "1", "1", "", "blue", "1", "1", "1", "1", "1", "1", "", "pink"],
    ["pink", "", "", "", "pink", "", "1", "1", "", "", "1", "1", "", "yellow", "", "", "pink", "blue", "1", "1", "1", "1", "", "blue", "1", "1", "1", "1", "1", "1", "", ""],
    ["1", "1", "", "", "1", "1", "1", "1", "pink", "blue", "1", "1", "1", "1", "", "", "1", "1", "yellow", "", "", "", "", "", "1", "1", "", "", "", "", "", ""],
    ["1", "1", "blue", "", "1", "1", "1", "1", "", "", "1", "1", "1", "1", "", "blue", "1", "1", "", "", "", "", "", "", "1", "1", "", "", "blue", "blue", "", ""],
    ["", "", "", "", "1", "1", "", "", "", "", "", "", "", "", "", "", "1", "1", "", "", "1", "1", "", "", "", "", "", "", "1", "1", "", ""],
    ["", "", "", "yellow", "1", "1", "", "", "", "", "", "blue", "pink", "", "", "", "1", "1", "blue", "blue", "1", "1", "", "pink", "", "", "yellow", "", "1", "1", "", "pink"],
    ["blue", "", "1", "1", "1", "1", "", "", "1", "1", "1", "1", "1", "1", "", "", "", "", "", "", "1", "1", "1", "1", "", "", "1", "1", "1", "1", "", ""],
    ["pink", "", "1", "1", "1", "1", "", "", "1", "1", "1", "1", "1", "1", "blue", "", "start", "pink", "", "", "1", "1", "1", "1", "blue", "blue", "1", "1", "1", "1", "", ""],
    ["", "", "", "", "", "", "", "blue", "1", "1", "", "", "", "", "", "", "1", "1", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "blue", "1", "1", "", "", "", "", "", "", "1", "1", "", "", "", "blue", "pink", "", "", "", "", "pink", "", "", "blue", ""],
    ["1", "1", "1", "1", "1", "1", "", "", "", "", "", "", "1", "1", "", "", "yellow", "", "", "", "1", "1", "1", "1", "", "", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "", "", "", "pink", "", "blue", "1", "1", "", "blue", "", "", "pink", "", "1", "1", "1", "1", "", "yellow", "1", "1", "1", "1", "1", "1"],
  ];

  public objects = { empty: "", block: "1", blue: "blue", pink: "pink", yellow: "yellow", start: "start" };
  public selectedObject = "";

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedObject(object: string) {
    this.selectedObject = object;
  }

  blockClicked(item: any) {
    item = this.selectedObject;
  }

  getImage(input: string): string {
    switch(input) {
      case "pink":
        return "/assets/pink_pot.png";
      case "blue":
        return "/assets/blue_pot.png";
      case "yellow":
        return "/assets/yellow_pot.png";
      case "1":
        return "/assets/block.png";
      case "start":
        return "/assets/panda.png"
    }
    return "/assets/empty.png"
  }
}
