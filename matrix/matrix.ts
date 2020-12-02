type Rows = number[][];
type Columns = number[][];

class Matrix {
  rows: Rows;
  columns: Columns;

  constructor(matrix: string) {
    const numRows = matrix.split('\n');

    this.rows = this.getRows(numRows);
    this.columns = this.getColumns(this.rows);
  }

  private getRows = (rows: string[]): Rows => {
    return rows.map(row => row.split(' ').map(Number));
  }

  private getColumns = (rows: Rows): Columns => {
    const columnNums = rows[0].length;

    return Array(columnNums).fill(null).map((_, idx) => rows.map(row => row[idx]));
  }
}

export default Matrix