import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Perfecto Lux',
    category: 'Комплексное восстановление',
    description: 'Идеальный баланс для ежедневной поддержки организма на клеточном уровне',
    benefits: ['Укрепление иммунитета', 'Повышение энергии', 'Антиоксидантная защита'],
    volume: '50 мл',
    price: '3 990 ₽'
  },
  {
    id: 2,
    name: 'Vitality Lux',
    category: 'Энергия и тонус',
    description: 'Активация жизненных сил и восстановление энергетического баланса',
    benefits: ['Борьба с усталостью', 'Улучшение метаболизма', 'Повышение выносливости'],
    volume: '50 мл',
    price: '4 290 ₽'
  },
  {
    id: 3,
    name: 'Smart Lux',
    category: 'Когнитивные функции',
    description: 'Поддержка мозговой активности, памяти и концентрации внимания',
    benefits: ['Улучшение памяти', 'Повышение концентрации', 'Ясность мышления'],
    volume: '50 мл',
    price: '4 590 ₽'
  },
  {
    id: 4,
    name: 'Harmony Lux',
    category: 'Эмоциональный баланс',
    description: 'Гармонизация нервной системы и поддержка эмоционального здоровья',
    benefits: ['Снижение стресса', 'Улучшение сна', 'Эмоциональная стабильность'],
    volume: '50 мл',
    price: '4 390 ₽'
  },
  {
    id: 5,
    name: 'Pavlov Spring',
    category: 'Детокс и очищение',
    description: 'Глубокое очищение организма и активация процессов регенерации',
    benefits: ['Вывод токсинов', 'Очищение клеток', 'Омоложение организма'],
    volume: '50 мл',
    price: '4 190 ₽'
  }
];

interface ProductsSectionProps {
  onConsultationClick: (productName: string) => void;
}

const ProductsSection = ({ onConsultationClick }: ProductsSectionProps) => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <>
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Наша линейка продуктов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый нано-бальзам создан для решения конкретных задач восстановления здоровья
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="Sparkles" size={24} className="text-primary" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent-foreground">
                      {product.volume}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-1">{product.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {product.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <Button 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onConsultationClick(product.name);
                      }}
                      className="gap-2"
                    >
                      <Icon name="MessageCircle" size={16} />
                      Консультация
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription className="text-base text-primary font-medium">
                  {selectedProduct.category}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <p className="text-lg">{selectedProduct.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Эффекты применения:</h4>
                  <div className="space-y-2">
                    {selectedProduct.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">Объём</p>
                    <p className="text-lg font-semibold">{selectedProduct.volume}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Цена</p>
                    <p className="text-3xl font-bold">{selectedProduct.price}</p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="w-full gap-2"
                  onClick={() => {
                    setSelectedProduct(null);
                    onConsultationClick(selectedProduct.name);
                  }}
                >
                  <Icon name="MessageCircle" size={20} />
                  Получить консультацию по применению
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductsSection;
