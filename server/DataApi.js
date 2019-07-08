import testData from './testData.json';

class DataApi {
  constructor() {
    this.rawData = testData.data;
  }
  getList() {
    return this.rawData.doctors;
  }
}

export default DataApi;
