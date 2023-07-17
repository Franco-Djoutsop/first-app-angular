import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/faces-snaps.services';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;
  buttonLabel! : string;
  constructor(private faceSnapService : FaceSnapsService, private route : Router) { }

    ngOnInit(): void {
      this.buttonLabel = "oh Snaps !!!";
    }

    onViewFaceSnap(){
     this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
    }
}
