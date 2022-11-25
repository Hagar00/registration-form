import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {


  constructor(public students:HttpClient) { }

  private register = "http://localhost:8000/api/addStudents"

  addSt(newSt:any){
    return this.students.post(this.register,newSt)
  }
}
