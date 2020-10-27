import { getPhotoUrl, fetchPhotos } from './flickr';

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

const mockFetch = (data) =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );

beforeEach(() => {
  global.fetch = mockFetch(RESPONSE_FLICKR);
});

describe('flickr client', () => {
  describe('fetchPhotos', () => {
    it('fetches all photos for a page', async () => {
      const page = 1;
      expect(await fetchPhotos(page)).toEqual(RESPONSE_FLICKR);
    });
  });

  describe('getPhotoUrl', () => {
    it('retrieves the url for a photo', () => {
      const photo = RESPONSE_FLICKR.photos.photo[0];
      expect(getPhotoUrl(photo)).toEqual(
        'https://farm66.staticflickr.com/65535/48576843611_02c2057179_m.jpg'
      );
    });
  });
});
