interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

const createSquare = function(config: SquareConfig):
{
  color: string;
  area: number;
  [propName: string]: any;
}
{
  const newSquare = { color: 'White', area: 0 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return { ...config, ...newSquare };
}

const square_1 = createSquare({color: 'black', width: 0, owner: 'Eric'});
console.log(square_1);
