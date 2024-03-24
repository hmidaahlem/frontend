import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

declare var $:any;

declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

@Component({
    moduleId: module.id,
    selector: 'liste-admin',
    templateUrl: './liste-admin.component.html'
})

export class  ListeAdminComponent implements OnInit{
    public dataTable: DataTable;
    ngOnInit(){
      this.dataTable = {
          headerRow: ['Nom', 'Prénom', 'Email', 'Société', 'Adresse de la société', 'Subdomaine de la société', 'Actions'],
          footerRow: ['Nom', 'Prénom', 'Email', 'Société', 'Adresse de la société', 'Subdomaine de la société', 'Actions'],
          dataRows: [
              ['John', 'Doe', 'john.doe@example.com', 'ABC Company', '123 Main Street', 'abc-company', ''],
              ['Jane', 'Smith', 'jane.smith@example.com', 'XYZ Corporation', '456 Elm Avenue', 'xyz-corp', ''],
              ['Alice', 'Johnson', 'alice.johnson@example.com', '123 Industries', '789 Oak Street', '123-industries', ''],
              ['Bob', 'Brown', 'bob.brown@example.com', 'Tech Solutions Ltd', '321 Pine Road', 'tech-solutions', ''],
              ['Emma', 'Taylor', 'emma.taylor@example.com', 'Global Enterprises', '567 Maple Lane', 'global-enterprises', ''],
              ['Michael', 'Williams', 'michael.williams@example.com', 'ACME Corp', '101 Broad Street', 'acme-corp', ''],
              ['Sarah', 'Jones', 'sarah.jones@example.com', 'Tech Innovations Inc', '246 High Street', 'tech-innovations', ''],
              ['David', 'Martinez', 'david.martinez@example.com', 'Red Rock Industries', '555 Sunset Boulevard', 'red-rock', ''],
              ['Jennifer', 'Miller', 'jennifer.miller@example.com', 'Blue Ocean Corporation', '888 Ocean Avenue', 'blue-ocean', ''],
              ['Matthew', 'Brown', 'matthew.brown@example.com', 'Sunset Solutions', '999 Sunrise Avenue', 'sunset-solutions', ''],
              ['Jessica', 'Wilson', 'jessica.wilson@example.com', 'Silver Star Enterprises', '333 Starlight Street', 'silver-star', ''],
              ['William', 'Garcia', 'william.garcia@example.com', 'Golden Gate Group', '444 Golden Gate Avenue', 'golden-gate', ''],
              ['Megan', 'Rodriguez', 'megan.rodriguez@example.com', 'Polaris Partners', '777 Polaris Parkway', 'polaris-partners', ''],
              ['James', 'Lopez', 'james.lopez@example.com', 'Evergreen Enterprises', '222 Evergreen Terrace', 'evergreen', ''],
              ['Ashley', 'Gonzalez', 'ashley.gonzalez@example.com', 'Silver Lining Solutions', '555 Silver Street', 'silver-lining', ''],
              ['Christopher', 'Hernandez', 'christopher.hernandez@example.com', 'Blue Ridge Corporation', '101 Blue Ridge Drive', 'blue-ridge', ''],
              ['Amanda', 'Martinez', 'amanda.martinez@example.com', 'Green Leaf Group', '777 Green Leaf Lane', 'green-leaf', ''],
              ['Daniel', 'Perez', 'daniel.perez@example.com', 'Sunflower Systems', '333 Sunflower Street', 'sunflower', ''],
              ['Lauren', 'Sanchez', 'lauren.sanchez@example.com', 'Golden Key Inc', '888 Golden Key Boulevard', 'golden-key', ''],
              ['Nicholas', 'Rivera', 'nicholas.rivera@example.com', 'Bright Future Enterprises', '555 Bright Future Road', 'bright-future', '']
              // Ajoutez d'autres lignes selon vos besoins
          ]
       };
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

    table.on('click', '.edit', function() {
      let $tr = $(this).closest('tr');
      var data = table.row($tr).data();
      window.location.href = '/compte-admin/modif/' + data['id'];
    });
    
  
    // Utiliser une fonction fléchée pour conserver le contexte de "this"
    table.on('click', '.remove', function(e) {
      let $tr = $(this).closest('tr');
      var data = table.row($tr).data();
      window.location.href = '/compte-admin/supprimer/' + data['id'];
      table.row($tr).remove().draw();
      e.preventDefault();
    });
  }
  
  constructor(private router: Router) {}
  
  ajouterAdmin() {
    this.router.navigate(['/compte-admin/ajout']);
  }
  
}
