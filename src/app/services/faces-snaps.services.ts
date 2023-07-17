import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';

@Injectable({providedIn: 'root'})
export  class FaceSnapsService {
    facesnapList: FaceSnap[] = [
        {id: 1,
          title:"365 jours DNI",
        description:"365 jours dni est une films espagnol qui raconte l'histoire d'un homme qui tombe amoureux d'une femme qui ne se souvient pas de lui mais qui chaque jour tombe petit a petit folement amoureuse de lui",
        createdDate: new Date(),
        snaps:900,
        imageUrl:"https://www.stockvault.net/data/2011/05/31/124348/thumb16.jpg",
        location:"Paris"},
  
        {id: 2,
          title:"Le Futé",
        description: "Le Futé est une personalite qui vous aide a toujours faire le bon choix dans votre vie de tous les jours et vous aide a prendre les bonnes decisions dans votre vie de tous les jours", 
        createdDate: new Date(),
        snaps: 91,
        imageUrl:"https://www.unsplash.com/photos/8wTPqxlnKM4/download?force=true&w=640",
        location:"La Montagne"},
  
        {id: 3,
          title:"Mr Sal",
        description:"mr sal est le pseudo du rappeur francais Niska qui est un rappeur francais d'origine congolaise qui a fait ses debuts dans le rap en 2012 et qui a connu le succes en 2015 avec son titre 'Charo'",
        createdDate: new Date()
        ,snaps: 140,
        imageUrl: "https://www.stockvault.net/data/2011/05/31/124348/thumb16.jpg"}
      ]; 

      getAllFaceSnaps(): FaceSnap[] {
          return this.facesnapList;
      }
      getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.facesnapList.find(faceSnap=>faceSnap.id === faceSnapId);
        if(!faceSnap){
          throw new Error('FaceSnap not found');
        }else{
          return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapid: number, snapType : 'snap' | 'unSnap') : void {
        const faceSnap = this.getFaceSnapById(faceSnapid);
        snapType=== 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      };
}