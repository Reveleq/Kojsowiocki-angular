import { Injectable } from '@angular/core';
import { News, NewsPopup } from '../models/docs.model';
import { ApiService } from '../../main/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private apiService: ApiService) {}
  src!: string;
  id!: string;
  imgId!: number;
  popup!: News;
  openModal(id: string, imgId: number) {
    this.id = id;
    this.imgId = imgId;
  }
}
