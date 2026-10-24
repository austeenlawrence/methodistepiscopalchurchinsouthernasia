/**
 * Normalizes image paths to ensure consistent, deployment-safe asset resolution.
 * Automatically adds a leading slash if omitted, preserving absolute paths in Vite and Vercel.
 */
export const getSafeImageUrl = (
  src: string | undefined,
  fallback = '/images/about church.jpeg'
): string => {
  if (!src || typeof src !== 'string' || src.trim() === '') {
    return fallback;
  }
  const trimmed = src.trim();
  // Preserve full external URLs
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  // Ensure leading slash for local public assets
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
};
