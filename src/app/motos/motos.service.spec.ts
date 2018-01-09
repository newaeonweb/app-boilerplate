import { TestBed, inject } from '@angular/core/testing';

import { MotosService } from './motos.service';

describe('MotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotosService]
    });
  });

  it('should be created', inject([MotosService], (service: MotosService) => {
    expect(service).toBeTruthy();
  }));
});
