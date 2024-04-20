import React from 'react';
import formatStatus from '@/utils/formatStatus';
import { Box, Typography, Link, Avatar, Button, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import NumbersIcon from '@mui/icons-material/Numbers';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import GradingIcon from '@mui/icons-material/Grading';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ProductBanner from './ProductBanner';

interface ProductViewProps {
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

export default function ProductView({ product }: ProductViewProps) {
  return (
    <>
      <ProductBanner product={product} />

      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          px: { xs: 4, lg: 6, xl: 10 },
          mt: '-16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            mt: { xs: '-56px', lg: '-6.0625rem' },
            flex: '0 0 auto',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow:
                '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
              border: '2px solid #F75159',
              height: { xs: '8rem', lg: '12.125rem' },
              width: { xs: '8rem', lg: '12.125rem' },
            }}
          >
            <Avatar
              alt={product.name}
              src={product.imageUrl}
              sx={{
                height: '100%',
                width: '100%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                borderRadius: '50%',
                border: '2px solid white',
                backgroundColor: '#F75159',
                width: '1rem',
                height: '1rem',
                top: { xs: '1rem', lg: '1rem' },
                left: { xs: '6.7rem', lg: '9.6rem' },
              }}
            ></Box>
          </Box>
        </Box>

        <Box
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Button
            component="a"
            variant="contained"
            href={`/admin/product/${product.id}/edit`}
            sx={{
              height: '48px',
              backgroundColor: 'hsla(185, 64%, 39%, 1.0)',
              '&:hover': { backgroundColor: 'hsla(185, 64%, 29%, 1.0)' },
            }}
          >
            <EditIcon sx={{ fontSize: '1.4rem', mr: 1 }} /> Edit Product
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          my: 5,
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap',
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '0.5rem',
            backgroundColor: 'white',
            p: 4,
            '&:first-child': {
              width: '100%',
              mb: { xs: 4, lg: '-6.0625rem' },
              lg: { width: '18rem', p: 6 },
              xl: { width: '22.375rem', p: 8 },
            },
            '&:last-child': { flex: 1, p: { xs: 4, lg: 6, xl: 7, '2xl': 10 } },
          }}
        >
          <Box sx={{ pb: 2, borderBottom: '1px dashed #E5E5E5' }}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Location
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              USA
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Description
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.primary', lineHeight: '171.429%' }}
            >
              {product.description}
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '-8px',
                width: 'calc(100% + 64px)',
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            borderRadius: '0.5rem',
            backgroundColor: 'white',
            p: 4,
          }}
        >
          <Grid container spacing={3}>
            {[
              {
                label: 'Product ID',
                value: product.id,
                icon: <NumbersIcon />,
                color: '#865DFF',
              },
              {
                label: 'Price',
                value: `$${product.price}`,
                icon: <AttachMoneyIcon />,
                color: '#FF8D29',
              },
              {
                label: 'Status',
                value: formatStatus(product.status),
                icon: <GradingIcon />,
                color: '#DF0D00',
              },
              {
                label: 'Name',
                value: product.name,
                icon: <BookmarkBorderIcon />,
                color: '#00AAFF',
              },
              {
                label: 'Quantity',
                value: product.quantity,
                icon: <ProductionQuantityLimitsIcon />,
                color: '#0017E1',
              },
              {
                label: 'Image',
                value: (
                  <Link
                    href={product.imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: 'black' }}
                  >
                    URL
                  </Link>
                ),
                icon: <ImageSearchIcon />,
                color: '#1be100',
              },
            ].map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={6} xl={4}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '0.5rem',
                    border: '1px solid #E5E5E5',
                    backgroundColor: 'white',
                    p: 5,
                    '&:hover': { borderColor: '#1b6cef' },
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{ mb: 1.5, color: 'text.primary' }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      borderColor: item.color,
                      borderWidth: '2px',
                      borderStyle: 'solid',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#fff',
                        color: item.color,
                        fontSize: '3xl',
                        border: '3px solid white',
                      }}
                    >
                      {item.icon}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
