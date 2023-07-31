module.exports = {
  mockConfig() {
    console.log("**** Mocking 'config' package! ****")
    jest.mock('config', () => {
      return {
        get: () => 'xyz'
      }
    });
  }
};
