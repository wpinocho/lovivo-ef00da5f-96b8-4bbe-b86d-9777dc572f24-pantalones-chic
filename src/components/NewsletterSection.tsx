import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="gradient-hero py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-white/20 rounded-full p-4">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-white/90 text-lg">
                  Recibirás nuestras mejores ofertas y promociones exclusivas pronto.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    ¿Quieres ofertas exclusivas?
                  </h3>
                  <p className="text-xl text-white/95">
                    Suscríbete a nuestro newsletter y recibe descuentos especiales
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 bg-white/95 border-0 text-foreground placeholder:text-muted-foreground h-12 text-lg"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto bg-white text-primary hover:bg-white/90 h-12 px-8 text-lg font-semibold"
                  >
                    {logic.isSubmitting ? 'Suscribiendo...' : 'Suscribirme'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-white bg-destructive/20 p-3 rounded">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};