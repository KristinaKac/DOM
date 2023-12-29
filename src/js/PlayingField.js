export default class PlayingField {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.container = document.querySelector('.container');

    this.createField();
    this.cells = Array.from(document.querySelectorAll('.cell'));
    this.previousIndex = null;
    this.currentIndex = null;

    this.searchAvailableNextCell = this.searchAvailableNextCell.bind(this);

    setInterval(this.searchAvailableNextCell, 500);
  }

  createField() {
    this.container.style.gridTemplateColumns = `repeat(${this.boardSize}, auto)`;
    this.container.style.gridTemplateRows = `repeat(${this.boardSize}, auto)`;

    for (let i = 0; i < this.boardSize; i += 1) {
      for (let j = 0; j < this.boardSize; j += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.container.appendChild(cell);
      }
    }
  }

  searchAvailableNextCell() {
    if (this.currentIndex !== null) {
      this.previousIndex = this.currentIndex;
      this.cells[this.previousIndex].classList.remove('active');
    }
    this.currentIndex = Math.floor(Math.random() * this.cells.length);

    if (this.previousIndex === this.currentIndex) {
      if (this.currentIndex === (this.cells.length - 1)) {
        this.currentIndex -= 1;
      } else {
        this.currentIndex += 1;
      }
    }
    this.cells[this.currentIndex].classList.add('active');
  }
}
