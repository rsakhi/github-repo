import { TestBed } from '@angular/core/testing';

import { OrganisationDetailsService } from './organisation-details.service';

describe('OrganisationDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganisationDetailsService = TestBed.get(OrganisationDetailsService);
    expect(service).toBeTruthy();
  });
});
