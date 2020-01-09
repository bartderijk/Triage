import { getters } from '@/store';

describe('getters', () => {
  it('GCS is a the total sum of eye, motor and verbal', () => {
    const state = {
      eye: 4,
      motor: 6,
      verbal: 5,
    };

    expect(getters.gcs(state))
    .toEqual(state.eye + state.motor + state.verbal);
  })
})
