/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/photo';


describe('actions', () => {
  it('photo should create a photo action', () => {
    expect(actions.increment()).to.deep.equal({ type: actions.GET_PHOTO });
  });
});
