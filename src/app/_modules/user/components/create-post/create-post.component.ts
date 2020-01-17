import { Component, ElementRef, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPost } from '../../_interfaces/post.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  @ViewChild('postText', {static: false}) postText : ElementRef;
  @Output() onPostCreation = new EventEmitter<IPost>();
  files: any =  { images : []  , video : '',  imagesCount : 0 };
  isPostCreated : boolean = false ;  
  amount : string;
  formattedAmount: string = '';

  constructor(private modalService: NgbModal) { }

  /* CREATING POST */
  createPost() {
    if(!this.postText.nativeElement.value){
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.data = { title : 'Create Post' , content : 'Please enter some text.' , type : 'alert'};
      modalRef.result.then((result) => {console.log(result);});
      return;
    }

    const post = <IPost>{};
    post.text = this.postText.nativeElement.value;
    post.images = ['img/bg5.jpg'];
    post.video  = this.files.video;
    post.likeCount = 0;
    post.replyCount= 0;
    post.user ={ 
      avatar : 'default-avatar.png' , 
      userName : 'Spijko', 
      firstName: 'Marc', 
      lastName : 'Spicer'
    },
    post.createdAt = new Date()
    
    this.isPostCreated = true;
    this.clearInputFields();
    this.onPostCreation.emit(post);
  }

  clearInputFields(){
    this.files.imagesCount = this.files.videosCount = 0;
    this.files.images = [];
    this.files.video = '';
    this.postText.nativeElement.value = '';
    setTimeout(() => { this.isPostCreated = false; }, 3000);
  }
}