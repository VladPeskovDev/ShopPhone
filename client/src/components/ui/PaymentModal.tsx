import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import './PaymentModal.css';

export default function PaymentModal({ open, handleClose }: { open: boolean; handleClose: () => void }): JSX.Element {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (): void => {
    alert('Оплата прошла успешно!');
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="payment-modal-title"
      aria-describedby="payment-modal-description"
    >
      <Box className="payment-modal">
        <Typography id="payment-modal-title" variant="h6" component="h2">
          Оплата
        </Typography>
        <TextField
          label="Номер карты"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Дата окончания (MM/YY)"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          fullWidth
          margin="normal"
          type="password"
        />
        <Button variant="contained" color="primary" fullWidth onClick={handlePayment}>
          Оплатить
        </Button>
        <Button variant="outlined" color="secondary" fullWidth onClick={handleClose} style={{ marginTop: '10px' }}>
            Отмена
          </Button>
      </Box>
    </Modal>
  );
}
