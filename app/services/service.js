app.service('demo', function() {
  return {
    statusButton: false,
    toogleComputer() {
      this.statusButton = !this.statusButton;
    },
    getComputerStatus() {
      return this.statusButton;
    }
  }
});