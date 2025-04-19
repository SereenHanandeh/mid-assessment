import { Component } from '@angular/core';
import { University } from '../../models/university.model';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-get-universities',
  imports: [],
  templateUrl: './get-universities.component.html',
  styleUrl: './get-universities.component.scss',
})
export class GetUniversitiesComponent {
  universities: University[] = [];
  errorMessage: string = '';

  constructor(private universityService: UniversityService) {}

  ngOnInit(): void {
    this.universityService.getUniversities().subscribe({
      next: (data) => (this.universities = data),
      error: (err) => (this.errorMessage = 'Error fetching universities.'),
    });
  }
}
