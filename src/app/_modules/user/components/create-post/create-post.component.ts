import { Component, OnInit, ElementRef, Output, ViewChild, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPost } from '../../_interfaces/post.interface';
import { CurrencyPipe } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit ,OnChanges {

  @ViewChild('postText', {static: false}) postText : ElementRef;
  @Output() onPostCreation = new EventEmitter<IPost>();
  files: any =  { images : []  , video : '',  imagesCount : 0 };
  isPostCreated : boolean = false ;  
  amount : string;
  formattedAmount: string = '';

  constructor(private modalService: NgbModal, private currencyPipe: CurrencyPipe) { }

  ngOnInit() { 
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('Changes',changes)    
  }

  transformAmount(event: any){
    console.log(this.amount);
    this.formattedAmount = this.currencyPipe.transform(this.amount, 'USD');
    // Remove or comment this line if you dont want to show the formatted amount in the textbox.
    event.target.value = this.formattedAmount;
  }

  
  onInputFocus(){
    console.log('Input focused.')
  }
  

  onFileSelection(event : any, type: string){    
    if(!event || !event.target || !event.target.files) return;
    if(type == 'images')
      this.files.images = [];
    Object.values(event.target.files).forEach((file : any ) => {
      if(type == 'images')
        this.files.images.push(file);       
      else
        this.files.video = file;
    });
    this.files.imagesCount = this.files['images'].length;
  }
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
    post.images = this.files.images.slice();
    post.video  = this.files.video;
    post.likeCount = 0;
    post.replyCount= 0;
    post.user = { avatar : 'default-avatar.png' , userName : '' , firstName : 'User'  , lastName : '' }
  
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