/**
 * Utility function to get the correct path for assets in both development and production
 * In production, it prepends the basePath (/nexus-shadcn-prototype)
 * In development, it returns the path as is
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/nexus-shadcn-prototype' : '';
  return `${basePath}${path}`;
} 