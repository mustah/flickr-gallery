import axios, {AxiosRequestConfig} from 'axios';

const apiKey = '9545b4285b9b1578212c910f41b82be3';

const config: AxiosRequestConfig = {
  baseURL: `https://api.flickr.com/services/rest`,
  timeout: 60_000,
};

type TrueFalseNumber = 0 | 1;

export interface Buddy {
  farm: number;
  owner: string;
  server: string;
}

export interface Photo extends Buddy {
  id: string;
  secret: string;
  title: string;
  ispublic: TrueFalseNumber;
  isfriend: TrueFalseNumber;
  isfamily: TrueFalseNumber;
}

export interface PhotosPageResult {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Photo[];
}

export interface PhotosResponse {
  photos: PhotosPageResult;
  stat: string;
}

interface FlickrServiceApi {
  searchPhotos: (text: string, page?: number) => Promise<PhotosResponse>
}

const method = `flickr.photos.search`;
const perPage = 20;

const restClient = axios.create({...config});

export const flickrService: FlickrServiceApi = {

  async searchPhotos(text: string, page: number = 1): Promise<PhotosResponse> {
    const {data} = await restClient.get(
      `/?method=${method}&api_key=${apiKey}&format=json&nojsoncallback=1&per_page=${perPage}&page=${page}&text=${text}`
    );
    return data;
  }
};
