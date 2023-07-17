import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/faces-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  facesnapList! : FaceSnap[];
  constructor(private faceSnapService : FaceSnapsService) { }
  ngOnInit(): void {
     this.facesnapList = this.faceSnapService.getAllFaceSnaps();
  }
}
