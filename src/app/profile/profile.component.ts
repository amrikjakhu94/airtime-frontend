import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CropperOption } from 'ngx-cropper';
import { ApiService } from '../core/services/api.service';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public coverPhoto: CropperOption;
  public profilePhoto: CropperOption;

  public imageUpload: FormGroup;
  display: boolean = false;
  fileNameData: any;
  imageChangedEvent: any = '';
  cropperReady = false;
  public httpCall: any = false;
  baseImage: Blob;
  profileData : Object;

  constructor(private http : HttpClient,private fb: FormBuilder,private apiService : ApiService) {
    this.imageUpload = fb.group({
      filename: [{ value: '', disabled: true }]
    });

    this.profilePhoto = {
      url: null, // image server url
      maxsize: 5120000, // image max size, default 500k = 512000bit
      title: 'Apply your image size and position', // edit modal title, this is default
      uploadBtnName: 'Update photo', // default Upload Image
      uploadBtnClass: null, // default bootstrap styles, btn btn-primary
      cancelBtnName: 'Cancel', // default Cancel
      cancelBtnClass: null, // default bootstrap styles, btn btn-default
      applyBtnName: 'Apply', // default Apply
      applyBtnClass: null, // default bootstrap styles, btn btn-primary
      errorMsgs: {  // These error msgs are to be displayed to the user (not the ones sent in returnData)
        4000: null, // default `Max size allowed is ${maxsize}kb, current size is ${currentSize}kb`
        4001: null  // default 'When sent to the server, something went wrong'
      },
      fdName: 'file', // default 'file', this is  Content-Disposition: form-data; name="file"; filename="fire.jpg"
      aspectRatio: 1 / 1, // default 1 / 1, for example: 16 / 9, 4 / 3 ...
      viewMode: 0 // default 0, value can be 0, 1, 2, 3
    };

    this.coverPhoto = {
      url: null, // image server url
      maxsize: 5120000, // image max size, default 500k = 512000bit
      title: 'Apply your image size and position', // edit modal title, this is default
      uploadBtnName: 'Update cover photo', // default Upload Image
      uploadBtnClass: null, // default bootstrap styles, btn btn-primary
      cancelBtnName: 'Cancel', // default Cancel
      cancelBtnClass: null, // default bootstrap styles, btn btn-default
      applyBtnName: 'Apply', // default Apply
      applyBtnClass: null, // default bootstrap styles, btn btn-primary
      errorMsgs: {  // These error msgs are to be displayed to the user (not the ones sent in returnData)
        4000: null, // default `Max size allowed is ${maxsize}kb, current size is ${currentSize}kb`
        4001: null  // default 'When sent to the server, something went wrong'
      },
      fdName: 'file', // default 'file', this is  Content-Disposition: form-data; name="file"; filename="fire.jpg"
      aspectRatio: 21 / 9, // default 1 / 1, for example: 16 / 9, 4 / 3 ...
      viewMode: 0 // default 0, value can be 0, 1, 2, 3
    };


  }

  // deal callback data of profile photo
  public onReturnCoverPhoto(data: any) {
    // Do what you want to do
    //console.warn(JSON.parse(data));
    console.log(data);
 
 
    //  Here has three type of messages now
    //  1. Max size
    // {
    //     code: 4000,
    //     data: currentSize,
    //     msg: `Max size allowed is ${this.viewConfig.maxsize / 1024}kb, current size is ${currentSize}kb`
    //  }
 
    //  2. Error
    //  {
    //       code: 4001,
    //       data: null,
    //       msg: 'ERROR: When sent to the server, something went wrong, please check the server url.'
    //  }
 
    //  3. Image type error
    // {
    //       code: 4002,
    //       data: null,
    //       msg: `The type you can upload is only image format`
    // }
 
    //  4. Success
    //  {
    //       code: 2000,
    //       data,
    //       msg: 'The image was sent to the server successfully'
    //  }
  }

  // deal callback data of profile photo
  public onReturnProfilePhoto(data: any) {
    // Do what you want to do
    console.warn(JSON.parse(data));
 
 
    //  Here has three type of messages now
    //  1. Max size
    // {
    //     code: 4000,
    //     data: currentSize,
    //     msg: `Max size allowed is ${this.viewConfig.maxsize / 1024}kb, current size is ${currentSize}kb`
    //  }
 
    //  2. Error
    //  {
    //       code: 4001,
    //       data: null,
    //       msg: 'ERROR: When sent to the server, something went wrong, please check the server url.'
    //  }
 
    //  3. Image type error
    // {
    //       code: 4002,
    //       data: null,
    //       msg: `The type you can upload is only image format`
    // }
 
    //  4. Success
    //  {
    //       code: 2000,
    //       data,
    //       msg: 'The image was sent to the server successfully'
    //  }
  }


  fileChangeEvent(event: any): void {
    this.display = true;
      this.imageChangedEvent = event;
      let fileName = event.target.files[0];
      this.fileNameData = fileName.name;
      console.log(this.fileNameData);
  }

  public onSave(fileData) {
    console.log('Entered onSave() function'+fileData);
     let fileName = this.fileNameData;
   let url = 'https://ngapp-f3c2d.firebaseio.com/amrik';
  
         this.httpCall = true;
         let formData = new FormData();
         formData.append("file", fileName);

         this.xhrRequest(url, formData);
       }
  // xhrRequest(url: string, formData: FormData): any {
  //   throw new Error("Method not implemented.");
  // }

  private xhrRequest(url, formData) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          this.httpCall = false;
          let rs = JSON.parse(xhr.response);
          console.log(rs+' getting RS.');
         
        } else {
         console.log('Error');
        }
      }
    }
    xhr.open("POST", url, true);
    xhr.send(formData);
  }

    dataURItoBlob(dataURI) {
      console.log(dataURI+' dataURI enter');
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
        return new Blob([new Uint8Array(array)], {
        type: 'image/jpg'
    });
  }



// My previous code
  selectedFile : File = null;
  fileIsSelected : boolean = false;

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.fileIsSelected = true;
  }

  onUpload(){
    console.log(this.selectedFile.name);
    const path = 'http://localhost:3000/uploads/' + this.selectedFile.name;
    console.log(path);
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
//    this.http.post('https://ngapp-f3c2d.firebaseio.com/uploadFile',fd) // myId database
    this.http.post('http://localhost:3000/uploadFile',fd)
      .subscribe(res => {
        console.log(res);
      })
  }

  ngOnInit() {
    this.apiService.getProfile().
      subscribe(
        res => {
          console.log(res);
          this.apiService.sendProfileData(res);
          this.profileData = res;
        }  
      )
  }

}
