/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MotoresService } from './motores.service';

describe('Service: Motores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotoresService]
    });
  });

  it('should ...', inject([MotoresService], (service: MotoresService) => {
    expect(service).toBeTruthy();
  }));
});
