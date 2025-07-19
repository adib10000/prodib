import { z } from 'zod';

// Indonesian phone number validation
const indonesianPhoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(50, 'Nama maksimal 50 karakter')
    .regex(/^[a-zA-Z\s]+$/, 'Nama hanya boleh berisi huruf dan spasi'),
  
  email: z
    .string()
    .email('Format email tidak valid')
    .min(1, 'Email wajib diisi'),
  
  phone: z
    .string()
    .regex(indonesianPhoneRegex, 'Format nomor HP Indonesia tidak valid (contoh: 08123456789)')
    .min(10, 'Nomor HP minimal 10 digit')
    .max(15, 'Nomor HP maksimal 15 digit'),
  
  service: z
    .string()
    .min(1, 'Pilih jenis layanan'),
  
  quantity: z
    .number()
    .min(12, 'Minimal order 12 pcs')
    .max(10000, 'Maksimal order 10.000 pcs'),
  
  message: z
    .string()
    .min(10, 'Pesan minimal 10 karakter')
    .max(500, 'Pesan maksimal 500 karakter')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;