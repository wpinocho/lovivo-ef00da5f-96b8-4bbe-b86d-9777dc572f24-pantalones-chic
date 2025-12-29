import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-card border-2 border-border hover:border-primary overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center gradient-card">
              <span className="text-white text-lg font-bold">{collection.name}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-foreground font-bold text-xl line-clamp-1 group-hover:text-primary transition-colors">
              {collection.name}
            </h3>
            {collection.featured && (
              <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-bold">
                Destacado
              </span>
            )}
          </div>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
            onClick={() => onViewProducts(collection.id)}
          >
            Ver Productos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}