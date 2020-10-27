import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Page from './Page';
import Gallery from './Gallery';
import Pagination from './Pagination';
import { fetchPhotos } from '../clients/flickr';

jest.mock('../clients/flickr');

const RESPONSE_FLICKR = {
  photos: {
    page: 1,
    pages: 2853,
    perpage: 2,
    total: '45642',
    photo: [
      {
        id: '48576843611',
        owner: '11368020@N03',
        secret: '02c2057179',
        server: '65535',
        farm: 66,
        title: 'USNS Piliaau T-AKR-304',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      },
      {
        id: '48576995382',
        owner: '11368020@N03',
        secret: '3a80637176',
        server: '65535',
        farm: 66,
        title: 'Freedom',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      }
    ]
  },
  stat: 'ok'
};
let wrapper;

beforeEach(() => {
  fetchPhotos.mockImplementation(() => Promise.resolve(RESPONSE_FLICKR));
  act(() => {
    wrapper = mount(<Page />);
  });
});

describe('Page', () => {
  it('renders a loading state while fetching', async () => {
    expect(wrapper.text()).toEqual('Loading...');
  });

  it('fetches pictures on mount and passes on', async () => {
    wrapper.update();

    expect(fetchPhotos).toHaveBeenCalledWith(1);
    expect(wrapper.find(Gallery).prop('photos')).toEqual(
      RESPONSE_FLICKR.photos.photo
    );
  });

  it('should setup pagination correctly', async () => {
    wrapper.update();

    const pagination = wrapper.find(Pagination);

    expect(pagination.prop('currentPage')).toEqual(1);
    expect(pagination.prop('lastPage')).toEqual(2853);
  });
});
