import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
//define 5 trainer
  private registry = signal([
    {
      name:'Ash Ketchum',
      team:['Pikachu','Charizard'],
      items:['Light Ball','Charizard Y']

    },
    {
      name:'Misty',
      team:['Starmie', 'Psyduck', 'Gyarados'],
      items:['Mystic Water', 'None', 'Gyaradosite']  

    },
    {
  name: 'Brock',
  team: ['Onix', 'Geodude', 'Crobat'],
  items: ['Hard Stone', 'Eviolite', 'Poison Barb']
},
{
  name: 'Lt. Surge',
  team: ['Raichu', 'Electrode', 'Magneton'],
  items: ['Magnet', 'Focus Sash', 'Air Balloon']
},
{
  name: 'Sabrina',
  team: ['Alakazam', 'Mr. Mime', 'Espeon'],
  items: ['Twisted Spoon', 'Light Clay', 'Choice Specs']
}
    

  ]);
  trainers = this.registry.asReadonly()

  
}
