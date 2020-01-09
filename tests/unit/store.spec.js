import { getters } from '@/store';

const state = {
  eye: 4,
  motor: 6,
  verbal: 5,
  sbpRtsScore: 4,
  rrRtsScore: 4,
  gcsRtsScore: 4
};

describe('getters', () => {
  it('Returns the glascow coma scale (gcs) based on the total of eye, motor and verbal', () => {
    expect(getters.gcs(state)).toEqual(state.eye + state.motor + state.verbal);
  }),

  it('Returns the revised trauma score (rts) based on the total of gcs, respiratory rate and blood pressure', () => {
    expect(getters.rts(state)).toEqual(state.gcsRtsScore + state.rrRtsScore + state.sbpRtsScore);
  })
})
