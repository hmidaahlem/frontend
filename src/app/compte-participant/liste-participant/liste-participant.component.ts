
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'app/API_service/user.service';
import { User } from 'app/models/user';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}




@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.css']
})

export class  ListeParticipantComponent implements OnInit{
  users!: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (response: any) => {
        this.users = response.users;
        console.log(response);
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  ngAfterViewInit() {
    $('#datatable').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      }
    });

    var table = $('#datatable').DataTable();

    table.on('click', '.edit', function () {
      let $tr = $(this).closest('tr');
      var data = table.row($tr).data();
      window.location.href = '/compte-participant/modif/' + data['id'];
    });

    table.on('click', '.remove', function (e) {
      let $tr = $(this).closest('tr');
      var data = table.row($tr).data();
      window.location.href = '/compte-participant/supprimer/' + data['id'];
      table.row($tr).remove().draw();
      e.preventDefault();
    });
  }

  ajouterPartcipant() {
    this.router.navigate(['/compte-participant/ajout']);
  }
  redirectToModif(id: number): void {
    
    this.router.navigate(['/compte-participant/modif', id]);
  }
  delete(event:any,id:number){
    if(confirm('sure!')){
      event.target.innertext="deleting";
      this.userService.delete(id).subscribe((res:any)=>{
      this.loadUsers();
      });
    
  }
}
}
