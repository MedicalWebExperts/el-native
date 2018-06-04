import React from 'react';
import renderer from 'react-test-renderer';

import FilterModal from './FilterModal';

const filters = [
  { name: 'Pediatrics', value: true },
  { name: 'Plastic Surgery', value: false },
  { name: 'Gynecologist', value: false },
  { name: 'Cardiac Surgery', value: false },
];

const props = {
  modalVisible: false,
  title: 'Specialties',
  filters,
  updateFilter: () => null,
  closeModal: () => null,
};

describe('FilterModal Snapshots', () => {
  it('should render a simple FilterModal', () => {
    const component = renderer.create(<FilterModal {...props} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
