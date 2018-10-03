import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public imageUpload: FormGroup;
  display: boolean = false;
  fileNameData: any;
  imageChangedEvent: any = '';
  cropperReady = false;
  public httpCall: any = false;
  baseImage: Blob;

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
  constructor(private http : HttpClient,private fb: FormBuilder) {
    this.imageUpload = fb.group({
      filename: [{ value: '', disabled: true }]
    });
  }

  ngOnInit() {}

}
