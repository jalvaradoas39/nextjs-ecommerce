'use client';

import React from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  FormControl,
  Typography,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from 'react';
import * as actions from '@/actions';

interface ProductEditFormProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    quantity: number;
    imageUrl: string;
    status: string;
  };
}

export default function ProductEditForm({ product }: ProductEditFormProps) {
  const [name, setName] = useState<string>(product.name);
  const [price, setPrice] = useState<string>(product.price);
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [description, setDescription] = useState<string>(product.description);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    product.imageUrl
  );

  const handleImageChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      setImage(file);

      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append('id', product.id.toString());
    formData.append('name', name);
    formData.append('price', price);
    formData.append('quantity', quantity.toString());
    formData.append('description', description);

    if (image) {
      formData.append('image', image);
    }

    actions.productEdit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{ borderBottom: '1px dashed #c8cdd3', pb: 1, display: 'flex' }}
        >
          <Typography variant="h5" fontWeight="bold">
            Update Product
          </Typography>
        </Box>

        <Box
          sx={{
            my: 5,
            display: 'flex',
            flexWrap: 'wrap',
            borderBottom: '1px dashed #c8cdd3',
            pb: 8,
          }}
        >
          <Box
            sx={{
              px: 2,
              pb: 5,
              width: { xs: '100%', sm: '100%', md: '33.333%' },
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Image
            </Typography>
            <Typography variant="body1">
              Upload your product image here
            </Typography>
          </Box>

          <Box
            sx={{
              p: 5,
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: '0.25rem',
              width: { xs: '100%', sm: '100%', md: '66.667%' },
            }}
          >
            {/* IMAGE (start) */}
            <label
              htmlFor="image"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <input
                type="file"
                accept="image/*"
                id="image"
                name="image"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <Box
                sx={{
                  borderStyle: 'dashed',
                  borderColor: '#d1d5db',
                  borderWidth: '1px',
                  borderRadius: '0.25rem',
                  cursor: 'pointer',
                  width: '100%',
                  p: 3,
                  mb: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  '&:hover': {
                    borderColor: '#bcbfc4',
                    '& svg': {
                      color: '#bcbfc4',
                    },
                  },
                }}
              >
                <CloudUploadIcon
                  fontSize="large"
                  sx={{
                    color: '#d1d5db',
                  }}
                />
                <Typography variant="body1" mt={2}>
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: 'hsla(185, 64%, 39%, 1.0)',
                    }}
                  >
                    Upload an image
                  </span>{' '}
                </Typography>
              </Box>
            </label>

            <Box>
              {imagePreview && (
                <Box
                  sx={{
                    position: 'relative',
                    mt: 2,
                    display: 'inline-flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: '0.375rem',
                    marginRight: '0.5rem',
                    border: '1px solid #E5E5E5',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: '4rem',
                      width: '7rem',
                      borderRadius: '0.375rem',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src={imagePreview}
                      width={60}
                      height={60}
                      alt="Image preview"
                      loading="lazy"
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: '0.25rem',
                      display: 'flex',
                      height: '1rem',
                      width: '1rem',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '9999px',
                      backgroundColor: '#DC2626',
                      color: '#FFFFFF',
                      fontSize: '0.625rem',
                      outline: 'none',
                      right: '0.25rem',
                    }}
                    onClick={() => setImagePreview(null)}
                  >
                    x
                  </IconButton>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <Box sx={{ my: 5, display: 'flex', flexWrap: 'wrap' }}>
          <Box
            sx={{
              px: 2,
              pb: 5,
              width: { xs: '100%', sm: '100%', md: '33.333%' },
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Description
            </Typography>
            <Typography variant="body1">Update product details here</Typography>
          </Box>

          <Box
            sx={{
              p: 5,
              bgcolor: 'background.paper',
              boxShadow: 2,
              borderRadius: '0.25rem',
              width: { xs: '100%', sm: '100%', md: '66.667%' },
            }}
          >
            {/* NAME (start) */}
            <TextField
              label="Name"
              fullWidth
              required
              sx={{ marginBottom: '1.2em' }}
              id="name"
              name="name"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />

            {/* PRICE (start) */}
            <FormControl fullWidth sx={{ marginBottom: '1.2em' }}>
              <InputLabel htmlFor="price">Amount</InputLabel>
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                fullWidth
                required
                id="price"
                name="price"
                value={price}
                onChange={(evt) => setPrice(evt.target.value)}
              />
            </FormControl>

            {/* QUANTITY (start) */}
            <TextField
              type="number"
              label="Quantity"
              fullWidth
              inputProps={{ min: '0' }}
              required
              sx={{ marginBottom: '1.4em' }}
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(evt) => setQuantity(parseInt(evt.target.value))}
            />

            {/* DESCRIPTION (start) */}
            <Box sx={{ position: 'relative' }}>
              <TextField
                label="Description"
                fullWidth
                multiline
                maxRows={4}
                minRows={6}
                required
                sx={{ marginBottom: '1.2em' }}
                id="description"
                name="description"
                value={description}
                onChange={(evt) => setDescription(evt.target.value)}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'sticky',
            bottom: 0,
            zIndex: 20,
          }}
        >
          <Box
            sx={{
              mx: -5,
              py: { xs: 3, md: 5 },
              px: { xs: 5, lg: 8 },
              backdropFilter: 'blur(20px)',
              textAlign: 'end',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                height: '48px',
                backgroundColor: 'hsla(185, 64%, 39%, 1.0)',
                '&:hover': { backgroundColor: 'hsla(185, 64%, 29%, 1.0)' },
              }}
            >
              Update Product
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}
