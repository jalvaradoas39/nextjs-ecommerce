import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface ProductBannerProps {
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

export default function ProductBanner({ product }: ProductBannerProps) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 4,
          py: 4,
          backgroundColor: 'white',
          color: '#666666',
          boxShadow:
            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
          borderRadius: '0.25rem',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" gutterBottom style={{ color: 'black' }}>
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            mb={4}
            sx={{ paddingBottom: { md: '4rem' } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada faucibus ex nec ultricies. Donec mattis egestas nisi non
            pretium. Suspendisse nec eros ut erat facilisis maximus. In congue
            et leo in varius. Vestibulum sit amet felis ornare, commodo orci ut,
            feugiat lorem.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={300}
            priority
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Box>
    </>
  );
}
