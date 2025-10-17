import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MainLayout } from '@/components/layout/MainLayout';
import { products } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductCardSkeleton } from '@/components/shared/ProductCardSkeleton';
export function BoutiquePage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate network delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <MainLayout>
      <div className="bg-saro-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold text-saro-dark"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Notre Boutique
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-lg text-saro-dark/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explorez nos collections de robes et d'accessoires, conçues pour la femme moderne.
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-0 flex-grow flex flex-col">
                      <Link to={`/boutique/${product.id}`} className="block">
                        <div className="aspect-square w-full overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-semibold text-saro-dark flex-grow">
                          <Link to={`/boutique/${product.id}`}>{product.name}</Link>
                        </h3>
                        <p className="text-saro-gold font-bold mt-2">{product.price.toFixed(2)} €</p>
                      </div>
                      <div className="p-4 pt-0">
                        <Button asChild className="w-full bg-saro-dark text-white hover:bg-saro-dark/90">
                          <Link to={`/boutique/${product.id}`}>Voir les détails</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </div>
      </div>
    </MainLayout>
  );
}