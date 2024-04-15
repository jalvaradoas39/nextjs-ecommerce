import { db } from '@/db';
import cloudinary from '@/config/cloudinary';
import { ProductData } from '@/types';

export const POST = async (req: Request) => {
  try {
    const formData = await req.formData();

    const name = formData.get('name') as string;
    const price = formData.get('price') as string;
    const quantity = parseInt(formData.get('quantity') as string);
    const description = formData.get('description') as string;
    const image = formData.get('image') as File;
    const status = '';

    const productData: ProductData = {
      name,
      description,
      price,
      quantity,
      status,
      imageUrl: '',
    };

    if (image) {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);
      const imageBase64 = imageData.toString('base64');

      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: 'CRUD',
        }
      );

      productData.imageUrl = result.secure_url;
    }

    await db.product.create({
      data: productData,
    });

    return Response.redirect(`${process.env.NEXTAUTH_URL}/admin`);
  } catch (error) {
    console.log('Errors: ', error);
    return new Response(JSON.stringify({ message: 'error' }), { status: 500 });
  }
};
