import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../model/players';

@Pipe({
  name: 'playerFilter'
})
export class PlayerFilterPipe implements PipeTransform {

  transform(value: Iplayers[], searchKey: string): Iplayers[] {

    let filteredArr : Iplayers[] = [];
    if(searchKey){
      filteredArr = value.filter(player => {
       if( player.team.toLocaleLowerCase().includes(searchKey)){
        return true
       }
       else if(player.name.toLocaleLowerCase().includes(searchKey)){
          return true
        }
        else if(player.odiRuns.toString().includes(searchKey)){
          return true
        }
        else if(player.yearDebut.toString().includes(searchKey)){
          return true
        }
        else if(player.testRuns.toString().includes(searchKey)){
          return true
        }
      
        else{
          return false
        } 
       })
   
       return filteredArr
     
   
    }
    else{ 
      return value
    }
  
      
    
  }
   
}
