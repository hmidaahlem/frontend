import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadDocuments();
  }

  loadDocuments() {
    this.apiService.getDocuments().subscribe(
      (response) => {
        this.documents = response;
      },
      (error) => {
        console.error('Error loading documents:', error);
      }
    );
  }

  importDocument(documentId: number) {
    this.apiService.importDocument(documentId).subscribe(
      (response) => {
        console.log('Document imported successfully:', response);
        // Actualiser la liste des documents après l'importation
        this.loadDocuments();
      },
      (error) => {
        console.error('Error importing document:', error);
      }
    );
  }

  exportDocument(documentId: number) {
    this.apiService.exportDocument(documentId).subscribe(
      (response) => {
        console.log('Document exported successfully:', response);
     
      },
      (error) => {
        console.error('Error exporting document:', error);
      }
    );
  }

  exportWithSign(documentId: number) {
    this.apiService.exportWithSign(documentId).subscribe(
      (response) => {
        console.log('Document exported with signature successfully:', response);
        // Traiter la réponse de l'exportation avec signature si nécessaire
      },
      (error) => {
        console.error('Error exporting document with signature:', error);
      }
    );
  }



}