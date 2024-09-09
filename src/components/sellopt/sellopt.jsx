import React from 'react';
import logo from '../../img/logo.png'
import logo from '../../img/logo.png'
import logo from '../../img/logo.png'

const ProductItem = ({ imageSrc, title, description }) => {
  return (
    <div style={styles.productItem}>
      <img src={imageSrc} alt={title} style={styles.productImage} />
      <h3 style={styles.productTitle}>{title}</h3>
      <p style={styles.productDescription}>{description}</p>
    </div>
  );
};

const SalesItems = () => {
  return (
    <div style={styles.container}>
      <ProductItem
        imageSrc="image1.jpg"
        title="Produto 1"
        description="Descrição do produto 1"
      />
      <ProductItem
        imageSrc="image2.jpg"
        title="Produto 2"
        description="Descrição do produto 2"
      />
      <ProductItem
        imageSrc="image3.jpg"
        title="Produto 3"
        description="Descrição do produto 3"
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  productItem: {
    border: '1px solid black',
    padding: '10px',
    textAlign: 'center',
    width: '30%', // Altera para ajustar o tamanho conforme necessário
  },
  productImage: {
    width: '100%',
    height: 'auto',
  },
  productTitle: {
    margin: '10px 0',
    fontSize: '18px',
  },
  productDescription: {
    fontSize: '14px',
  },
};

export default SalesItems;
