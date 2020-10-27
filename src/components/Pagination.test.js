import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders correctly as a snapshot', () => {
    const wrapper = mount(
      <Pagination
        currentPage={1}
        lastPage={10}
        handleNextPage={jest.fn()}
        handlePreviousPage={jest.fn()}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
