export const getImagePublicId = (imageUrl: string): string => {
  const parts = imageUrl.split('/');
  const filename = parts[parts.length - 1];
  const publicId = filename.split('.')[0];

  return publicId;
};
