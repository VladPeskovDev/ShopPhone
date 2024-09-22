import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import type { Product } from '../Product';
import './ProductDetailsModal.css';

interface ProductDetailsModalProps {
  product: Product | null;
  open: boolean;
  handleClose: () => void;
}

export default function ProductDetailsModal({ product, open, handleClose }: ProductDetailsModalProps): JSX.Element {
  if (!product) return null;

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className="modal-box">
        <Typography id="modal-title" variant="h6" component="h2">
          {product.name}
        </Typography>
        <img src={product.image} alt={product.name} className="modal-image" />
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Цена: {product.price} Р
        </Typography>
        <Typography>Рейтинг: {product.rating} ⭐</Typography>
        <Button onClick={handleClose} className="close-button">Закрыть</Button>
      </Box>
    </Modal>
  );
}
