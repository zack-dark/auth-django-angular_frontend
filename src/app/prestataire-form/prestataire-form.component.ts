import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-prestataire-form',
  templateUrl: './prestataire-form.component.html',
  styleUrls: ['./prestataire-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class PrestataireFormComponent {
  prestataireForm: FormGroup; // Formulaire réactif
  categories: string[] = ['Aventure', 'Culture', 'Nature', 'Gastronomie']; // Liste des catégories

  constructor(private fb: FormBuilder) {
    // Configuration des champs avec validations
    this.prestataireForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.prestataireForm.valid) {
      console.log('Données du formulaire :', this.prestataireForm.value);
      // Ajoutez ici la logique pour envoyer les données au backend via HTTP
    } else {
      console.log('Formulaire invalide !');
    }
  }
}
