class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  getList() {
    return this.rawData.doctors;
  }
}

export default DataApi;
