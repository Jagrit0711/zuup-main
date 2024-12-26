import { supabase } from '@/lib/supabase';

export const uploadImage = async (file: File) => {
  // Generate a unique filename
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  // Upload the file to the donations bucket
  const { error: uploadError, data } = await supabase.storage
    .from('donations')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (uploadError) {
    console.error('Upload error:', uploadError);
    throw uploadError;
  }

  // Get the public URL for the uploaded file
  const { data: { publicUrl } } = supabase.storage
    .from('donations')
    .getPublicUrl(filePath);

  return publicUrl;
};