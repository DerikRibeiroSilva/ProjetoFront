import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementquantidade,
  decrementquantidade,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalprice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantidade * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Seu carrinho está vazio!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Imagem</div>
            <div>Produto</div>
            <div>preço</div>
            <div>quantidade</div>
            <div>Adicionar/Remover</div>
            <div>Total</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.name}</p>
              <p>R$ {item.price}</p>
              <p>{item.quantidade}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementquantidade(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementquantidade(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>R$ {item.quantidade * item.price}</p>
            </div>
          ))}
          <h2>Total das Compras: R$ {getTotalprice()}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
