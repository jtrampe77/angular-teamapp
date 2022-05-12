import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
  numberOfTeams : number | "" = "";
  teams : string[][] = [];

  onInput(member:string){
    this.newMemberName = member;
  };

  onNumberOfTeamsInput(value:string){
    this.numberOfTeams = Number(value);
  }

  addMember(){

    // if member name is empty
    if(!this.newMemberName){
      this.errorMessage = "Name cannot be empty!";
      return;
    }   
      this.errorMessage = '';
      this.members.push(this.newMemberName);
      this.newMemberName = "";

  };

  generateTeams(){
    
    // if the input of teams are nothing or less than 0
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = "Invalid number of teams"
      return
    }

    // if the input of teams is greater than the number of members
    if(this.members.length < this.numberOfTeams){
      this.errorMessage = "Not enough members"
      return
    }

    this.errorMessage = '';
    const allMembers = [...this.members]
    
    while(allMembers.length){
      for(let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex,1)[0];

        if(!member)break;
  
        if(this.teams[i]){
          this.teams[i].push(member)
        }else{
          this.teams[i] = [member]
        }
  
      }
    }

    this.members = [];
    this.numberOfTeams = "";
    
  };

 
}
