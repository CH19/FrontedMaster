// Se crea una interfaz para establecer el tipo de datos del que tienen que ser las fotos
export interface pohtosData{
  id: number;
  title: string;
  price: number;
  category: { id: number, name: string, image: string }
  ​​
  creationAt: string
  ​​
  description: string
  ​​
  ​​
  images: string[]
  ​
  ​​
}
