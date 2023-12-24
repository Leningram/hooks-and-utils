export interface TableSortData<T> {
  key: keyof T;
  direction: 'asc' | 'desc';
}

export const sortTable = <T>(array: T[], sortingData: TableSortData<T>): T[] => {
  const sortedItems = [...array].sort((a, b) => {
    if (sortingData.direction === 'asc') {
      if (a[sortingData.key] > b[sortingData.key]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (a[sortingData.key] > b[sortingData.key]) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  return sortedItems;
};

// EXAMPLE:

interface MockData {
  id: number;
  name: string
}

const tableData: MockData[] = [
  {
    id: 1,
    name: 'John'
  },
  {
    id: 2,
    name: 'Alice'
  }
]

console.log(sortTable(tableData, {key: 'name', direction: 'asc'})) // [{id: 2, name: 'Alice'},{id: 1, name: 'John'}]
