'use client';

import { useRouter } from 'next/navigation';
import { Box, Button, Typography } from '@mui/material';

export default function ProductFilters() {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          p: 5,
          md: { p: 8 },
          backgroundColor: '#fff',
          boxShadow: 2,
          borderRadius: '0.25rem',
          mb: 8,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            height: '2.5rem',
            width: '0.4rem',
            backgroundColor: 'hsla(185, 64%, 39%, 1.0)',
            borderTopRightRadius: '0.375rem',
            borderBottomRightRadius: '0.375rem',
            top: { xs: '22%', sm: '34%' },
            left: { xs: '0px', sm: '0px' },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: { xs: 2, md: 0 },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Products
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.push('/admin/product/add')}
            sx={{
              backgroundColor: 'hsla(185, 64%, 39%, 1.0)',
              color: 'white',
              width: { xs: '100%', sm: '14rem' },
              '&:hover': { backgroundColor: 'hsla(185, 64%, 29%, 1.0)' },
              '& > .MuiButton-label': {
                fontSize: { xs: '0.875rem' },
              },
            }}
          >
            Create Product
          </Button>
        </Box>
      </Box>
    </>
  );
}
