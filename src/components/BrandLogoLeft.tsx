export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/ef00da5f-96b8-4bbe-b86d-9777dc572f24/logo.jpg" 
        alt="Luxe Pants Logo"
        className="h-12 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-gradient">Luxe Pants</span>';
        }}
      />
    </a>
  )
}