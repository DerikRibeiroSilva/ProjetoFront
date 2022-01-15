import data from './data.json';

export function getProducts() {
  return data;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `O método ${req.method} não é permitido` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}
