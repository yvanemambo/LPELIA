/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // ESLint flat-config compatibility is being finalized separately.
  // Keep the production build independent from the optional lint step.
  eslint: { ignoreDuringBuilds: true }
};
export default nextConfig;
