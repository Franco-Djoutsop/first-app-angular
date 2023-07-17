import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/faces-snaps.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sigle-facesnap',
  templateUrl: './sigle-facesnap.component.html',
  styleUrls: ['./sigle-facesnap.component.scss']
})
export class SigleFacesnapComponent implements OnInit{
  @Input() faceSnap! : FaceSnap;
  buttonLabel! : string;
  constructor(private faceSnapService : FaceSnapsService,private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.buttonLabel = "oh Snaps !!!";
      const faceSnapId= +this.route.snapshot.params['id'] //le + permet de caster en number
      this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId)
    }

    onClikedSnap(){
      if(this.buttonLabel==="oh Snaps !!!"){
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.buttonLabel = "oups, UnSnaps!!!";
      }else{
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
        this.buttonLabel = "oh Snaps !!!";
      }
    }
}
