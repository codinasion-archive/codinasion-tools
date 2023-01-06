//convert random or string id into a range on number 0 to n
export const idRange = (arr: any) => {
  let newArr = [];
  for (let i: number = 0; i < arr.length; i++) {
    arr[i].id = i;
    newArr.push(arr[i]);
  }
  return newArr;
};

export const categoryFun = async (arr: any, category: string) => {
  let xl: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.category.map((item: any) => {
      if ((item.title.toLowerCase() == category.toLowerCase()) && category.length>2) {
        xl.push(element);
      }
    });
  }
  return xl;
};
export const categoryFunII = async (arr: any, category: string) => {
  let xl: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element.category.map((item: any) => {
      item.title.toLowerCase().includes(category.toLowerCase()) &&
        xl.push(element);
    });
  }
  return xl;
};
export const categoryFunIII = async (arr: any, category: string) => {
  let xl: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (
      (element.title.toLowerCase().includes(category) ||
        element.description.toLowerCase().includes(category)) &&
      category.length > 2
    ) {
      xl.push(element);
    }
  }
  return xl;
};
