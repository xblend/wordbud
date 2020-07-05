import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private http: HttpClient) {
      this.createForm();
     }
    @ViewChild('fform') searchFormDirective;
  ngOnInit(): void {}
  createForm(){
    this.searchForm = this.fb.group({
      word: ["",Validators.required]
    });
  }


  onSubmit(){
    window.location.href = "https://www.dictionary.com/browse/"+this.searchForm.get('word').value;
    this.searchFormDirective.resetForm({
      word: ""
    });
    //return this.http.get("https://www.dictionary.com/browse/apple")
  }
  get word(){
    return this.searchForm.get('word').value;
  }

}
